<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'lastname',
        'email',
        'password',
        'img',
        'external_id',
        'role_id',
        'email_verified_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public static $rules = [
        'email' => 'unique:users,email,',
        'name' => 'required',
        'lastname' => 'required',
        'img' => 'sometimes|required:NULL',
        'password' => 'required',
        'external_id' => 'sometimes|required:NULL',
        'role_id' => 'sometimes|required|string',
        'email_verified_at' => 'sometimes|required|date',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }
}
