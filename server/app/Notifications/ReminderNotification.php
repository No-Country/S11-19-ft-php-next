<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;


class ReminderNotification extends Notification
{
    public $user_id;
    public $reminder_id;

    public function __construct($reminder_id)
    {

        $this->reminder_id = $reminder_id; // Establece el valor recibido como argumento
    }

    public function toDatabase($notifiable)
    {
        return [
            'message' => 'Tu mensaje personalizado aquí.',
        ];
    }

    public function via($notifiable)
    {
        return ['database'];
    }
}