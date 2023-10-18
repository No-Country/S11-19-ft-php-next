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
            'date' => '01/12/2023',
            'time' => '22:00',
            'type' => 'Weekly',
            'repeat' => False,
            'Plant_id' => 1,
        ]);
    }
}
