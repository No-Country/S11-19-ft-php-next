<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\View\View;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function showProfile()
    {
        $user = DB::table('users')
        ->select(DB::raw("CONCAT(name,' ',lastname) AS name"), 'email', 'img')
        ->where('id', auth()->id())
        ->get();
        
        return response([
            "message" => 'Profile user',
            "data" => $user
        ],200); 
    }

    public function updateProfile(Request $request)
    {
        // Update name, lastname, email and image
        try {
            DB::table('users')
            ->where('id', '=', auth()->id())
            ->update($request->input());

            $user = DB::table('users')
            ->select(DB::raw("CONCAT(name,' ',lastname) AS name"), 'email', 'img')
            ->where('id', auth()->id())
            ->get();
            
            return response([
                "message" => 'Updated profile successfully',
                "data" => $user
            ],200); 
        } catch (\Throwable $e) {
            return response(["error" => $e->getMessage()],500); 
        }
    }

    public function updatePassword(Request $request)
    {
        try {
            $validated = $request->validateWithBag('updatePassword', [
                'current_password' => ['required', 'current_password'],
                'password' => ['required', Password::defaults(), 'confirmed'],
            ]);

            DB::table('users')
            ->where('id', '=', auth()->id())
            ->update([
                'password' => Hash::make($validated['password']),
            ]);

            return response(["message" => 'Updated password successfully'],200); 
        } catch (\Throwable $e) {
            return response(["error" => $e->getMessage()],500); 
        }
    }
}
