<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $table = 'notifications';

    protected $fillable = [
        'id',
        'type',
        'notifiable_type',
        'notifiable_id',
        'data',
        'read_at',
        'user_id',
        'reminder_id',
        'reminder_type',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function reminder()
    {
        return $this->belongsTo(Reminder::class, 'reminder_id');
    }
}