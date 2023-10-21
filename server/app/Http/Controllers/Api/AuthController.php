<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Models\Role;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use ApiResponse;

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        // Revisar validacion contraseña e email correcto
        if (!Auth::attempt($data)) {
            return $this->errorResponse(null, 'El email o el password son incorrectos', 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return $this->errorResponse(null, 'Compruebe que los datos ingresados sean correctos');
        }

        // Autenticar al usuario
        /** @var \App\Models\User $user * */
        $user = Auth::user();

        $data = ['token' => $user->createToken('token')->plainTextToken, 'user' => $user];

        return $this->successResponse($data, 'Login success');
    }

    public function register(RegisterRequest $request)
    {
        // Validate data
        $data = $request->validated();

        $role = Role::where('name', 'user')->first();

        // Create user
        $user = User::create([
            'name' => $data['name'],
            'lastname' => $data['lastname'],
            'email' => $data['email'],
            'password' => bcrypt($request['password']),
            'img' => $request['img'],
            'role_id' => $role->id,
            'external_id' => $request['external_id'],
        ]);

        // Return
        $data = ['token' => $user->createToken('token')->plainTextToken,
            'user' => $user, ];

        return $this->successResponse($data, 'Usuario registrado');
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return $this->successResponse(null, 'Logout Correcto');
    }
}
