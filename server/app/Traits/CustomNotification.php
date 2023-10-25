<?php

namespace App\Traits;
use App\Notifications\ReminderNotification;

trait CustomNotification
{
    protected function sendNotification($user)
    {
        $notification = new ReminderNotification(1,1);
        $notification->user_id = 1;
        $notification->reminder = 1;
        $user->notify($notification);
        return true;
    }
}