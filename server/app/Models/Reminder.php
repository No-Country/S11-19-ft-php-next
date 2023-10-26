<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'frequency',
        'date',
        'date',
        'time',
        'type',
        'repeat',
        'plant_id',
        'user_id',
    ];

    public function Plant(){
        return $this->belongsTo(Plant::class, 'plant_id');
    }
    public function User(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
