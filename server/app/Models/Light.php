<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Light extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];
    public function plant() {return $this->hasMany('App\Models\Plant','light_id','id'); }
}
