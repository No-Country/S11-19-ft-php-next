<?php

namespace Database\Seeders;

use App\Models\Light;
use Illuminate\Database\Seeder;

class LightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Light::create([
            'name' => 'Directa'
        ]);

        Light::create([
            'name' => 'Indirecta'
        ]);

        Light::create([
            'name' => 'Sombra'
        ]);
    }
}
