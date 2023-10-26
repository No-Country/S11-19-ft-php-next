<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.users.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        //Todo ver el last_login. Lo tuve que agregar porque decia requerido, pero ver si viene del front despues

        $request->validate(User::$rules);
        try {
            $request->merge(['password' => Hash::make($request->password)]);
            $user = User::create($request->all());

            return response()->json(['message' => 'El usuario ha sido creado correctamente'], 200);

            // return redirect(route('users.index', $user));
        } catch (QueryException $e) {
            $msg = __('There has been an error');
            return response()->json(['message' => 'Error'], 500);
/*             return redirect()->back()
            ->withInput($request->input())
            ->with('error', $msg); */
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        return view('admin.users.edit',['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            
            $request->validate([
                'name' => 'nullable|string',
                'lastname' => 'nullable|string',
                'email' => 'nullable|email',
                'password' => 'nullable|string|min:6', 
                'role_id' => 'nullable|integer',
            ]);

            $user = User::findOrFail($id);

            $user->name = $request->input('name');
            $user->lastname = $request->input('lastname');
            $user->email = $request->input('email');

            if ($request->has('password')) {
                $user->password = Hash::make($request->input('password'));
            }

            $user->role_id = $request->input('role_id');
            $user->save();

            return response()->json(['success' => true, 'message' => 'Usuario actualizado correctamente']);
        } catch (\Throwable $th) {
            return response()->json(['success' => false, 'message' => 'El usuario no se pudo actualizar']);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
    $user = User::find($id);

    if ($user) {
        $user->delete();
        return response()->json(['success' => true, 'message' => 'Usuario eliminado correctamente']);
    } else {
        return response()->json(['success' => false, 'message' => 'El usuario no existe o no se pudo eliminar']);
    }
    }
}
