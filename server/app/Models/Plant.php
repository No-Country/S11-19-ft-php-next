<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Plant extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

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

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->width(368)
              ->height(232)
              ->sharpen(10);
    }
}
