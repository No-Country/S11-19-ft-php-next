<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlantEvent extends Model
{
    use HasFactory;

    protected $table = 'plants_events';

    protected $fillable = [
        'plant_id',
        'event_id',
        'notification_id',
    ];

    public function plant()
    {
        return $this->belongsTo(Plant::class, 'plant_id');
    }
    public function notification()
    {
        return $this->belongsTo(Notification::class, 'notification_id');
    }
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }
}
