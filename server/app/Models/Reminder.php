<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory;
    protected $fillable = [
        'frequency',
        'days',
        'warning_Time',
        'type',
        'repeat',
    ];

    
}
