<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class ProfileController extends Controller
{
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
