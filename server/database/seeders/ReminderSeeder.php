<?php

namespace Database\Seeders;

use App\Models\Plant;
use App\Models\Reminder;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ReminderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Plant::create([
            'id' => 1,
            'name' => 'Plant test',
            'environment_id' => 2,
            'light_id' => 1,
            'date' => '2023-10-21',
            'description' => 'text example',
            // 'image' => 'asdwadw',
            'user_id' => 1,
        ]);

        Reminder::create([
            'name' => 'reminder1',
            'frequency' => 'Weekly',
            'date' => '2023-12-01',
            'time' => '22:00',
            'type' => 'Irrigation',
            'repeat' => False,
            'plant_id' => 1,
            'user_id' => 1,
        ]);
    }
}
