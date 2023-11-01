<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use App\Models\User;

class ProfileController extends Controller
{
    public function showProfile()
    {
        $user = DB::table('users')
        ->select(DB::raw("CONCAT(name,' ',lastname) AS name"), 'email')//, 'img'
        ->where('id', auth()->id())
        ->get();
        
        $u = User::findOrFail(auth()->id());
        if ($u->hasMedia('Users')){
            $mediaUrl = $u->getMedia('Users')->first()->getUrl('thumb');
            $user['mediaUrl'] = $mediaUrl;
        }

        return response([
            "message" => 'Profile user',
            "data" => $user
        ],200); 
    }

    public function updateProfile(Request $request)
    {
        // Update name, lastname, email and image (file)###########
        try {
            DB::table('users')
            ->where('id', '=', auth()->id())
            ->update([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'email' => $request->email,
            ]);

            $user = DB::table('users')
            ->select(DB::raw("CONCAT(name,' ',lastname) AS name"), 'email')//, 'img'
            ->where('id', auth()->id())
            ->get();
            
            $u = User::findOrFail(auth()->id());
            if ($u->hasMedia('Users')){
                $u->clearMediaCollection('Users');
            }
            $u->addMediaFromRequest('image')->toMediaCollection('Users');

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
