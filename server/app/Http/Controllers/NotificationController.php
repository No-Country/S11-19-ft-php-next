<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Notification;
use App\Models\User;
use App\Traits\ApiResponse;

class NotificationController extends Controller
{
    use ApiResponse;
    public function index()
    {
        try {
            $user = Auth::user(); 
            $notifications = $user->unreadNotifications;
            return $this->successResponse($notifications, 200);
        } catch (\Exception $e) {
            return $this->errorResponse(null, $e->getMessage());
        }
    }

    public function update($id)
    {
        try {
            $check = Notification::find($id);
            $notification = Auth::user()->$check;
            // $notification = Auth::user()->notifications()->find($id); 
    
            if ($notification) {
                $notification->markAsRead(); 
                return $this->successResponse(null,'Notificación actualizada');
            } else {
                return $this->errorResponse(null,'Notificación no encontrada');
            }
        } catch (\Exception $e) {
            return $this->errorResponse(null, $e->getMessage());
        }
    }

    public function unread()
    {
        try {
            $user = Auth::user();
            $unreadNotifications = $user->unreadNotifications->count();
            return $this->successResponse($unreadNotifications, 'Notificaciones no leidas');
        } catch (\Exception $e) {
            return $this->errorResponse(null,$e->getMessage());
        }
    }
}
