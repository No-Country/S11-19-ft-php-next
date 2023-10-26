<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;


class ReminderNotification extends Notification
{
    public $user_id;
    public $reminder_id;
    public $time;
    public $date;
    public $plant;
    public function __construct($reminder_id,$date,$time,$type,$plant)
    {
        $this->reminder_id = $reminder_id;
        $this->date = $date;
        $this->time = $time;
        $this->type = $type;
        $this->plant = $plant;
    }

    public function toDatabase($notifiable)
    {
        return [
            'reminder_id' => $this->reminder_id,
            'date' => $this->date,
            'time' => $this->time,
            'type' => $this->type,
            'plant' => $this->plant
        ];
    }

    public function via($notifiable)
    {
        return ['database'];
    }
}