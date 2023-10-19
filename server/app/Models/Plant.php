<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'environment_id',
        'light_id',
        'date',
        'description',
        'image',
        'user_id',
    ];

    public function environment(){
        return $this->belongsTo(Environment::class, 'environment_id');
    }

    public function light(){
        return $this->belongsTo(Light::class, 'light_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
