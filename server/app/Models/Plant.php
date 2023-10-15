<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    use HasFactory;
    protected $table = 'plants';

    protected $fillable = [
        'name', 
        'img', 
        'size', 
        'type_id',  
        'home_id'
    ];

    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }

    public function home()
    {
        return $this->belongsTo(Home::class, 'home_id');
    }
}
