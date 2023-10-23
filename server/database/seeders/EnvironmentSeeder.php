<?php

namespace Database\Seeders;

use App\Models\Environment;
use Illuminate\Database\Seeder;

class EnvironmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Environment::create([
            'name' => 'Interior'
        ]);

        Environment::create([
            'name' => 'Exterior'
        ]);
    }
}
