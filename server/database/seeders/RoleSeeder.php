<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $role1 = ['name' => 'admin'];
        $role2 = ['name' => 'user'];
        Role::create($role1);
        Role::create($role2);
    }
}
