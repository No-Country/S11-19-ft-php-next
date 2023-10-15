<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Home;
class UserHome extends Model
{
    use HasFactory;
    
    protected $table = 'users_homes';

    protected $fillable = [
        'user_id',
        'home_id',
        'owner',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function home()
    {
        return $this->belongsTo(Home::class, 'home_id');
    }
}
