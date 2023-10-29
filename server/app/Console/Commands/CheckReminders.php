<?php

namespace App\Console\Commands;
use App\Notifications\ReminderNotification;
use App\Models\Reminder;
use App\Models\User;
use Illuminate\Console\Command;
 use Illuminate\Support\Facades\Log; 

class CheckReminders extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {

         try {
            $today = date('Y-m-d');
            $reminders = Reminder::where('date', $today)->with('plant')->with('user')->get();
            foreach ($reminders as $reminder) {
                Log::info('task successful: ' . $today);
                    $reminder->user->notify(new ReminderNotification(
                    $reminder->id,
                    $reminder->date,
                    $reminder->time,
                    $reminder->type,
                    $reminder->plant->name));
            }
            } catch (\Throwable $th) {
                Log::info('task failed: ' . $today);
                Log::error($th);
        }
    }
}
