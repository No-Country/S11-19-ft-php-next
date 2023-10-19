<?php

namespace Database\Seeders;

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
        // Plants::create([
        //     'frequency' => 'Weekly',
        // ]);

        Reminder::create([
            'name' => 'reminder1',
            'frequency' => 'Weekly',
            'date' => '2023-12-01',
            'time' => '22:00',
            'type' => 'Irrigation',
            'repeat' => False,
            'Plant_id' => 1,
        ]);
    }
}
