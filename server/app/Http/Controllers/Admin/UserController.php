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

            return 'Creado!';

            // return redirect(route('users.index', $user));
        } catch (QueryException $e) {
            $msg = __('There has been an error');

            return redirect()->back()
            ->withInput($request->input())
            ->with('error', $msg);
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
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
    }
}
