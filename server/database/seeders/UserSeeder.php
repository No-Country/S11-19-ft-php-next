<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::getQuery()->delete();

        $adminRole = Role::whereName('admin')->firstOrFail();
        User::create(['name' => 'Admin', 'lastname' => 'Principal', 'email' => 'admin@admin.com', 'password' => Hash::make('MyPassword123!'), 'email_verified_at' => Carbon::now(), 'role_id' => $adminRole->id]);
        User::create(['name' => 'Yamila', 'lastname' => 'Paez', 'email' => 'yamilapaez2@gmail.com', 'password' => Hash::make('MyPassword123!'), 'email_verified_at' => Carbon::now(), 'role_id' => $adminRole->id]);

        // create some random users
        User::factory(100)->create();
    }
}
