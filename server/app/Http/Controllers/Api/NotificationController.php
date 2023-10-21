<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Notification;


class NotificationController extends Controller
{
    use ApiResponse;
    public function index()
    {
        $notifications = Notification::with('user')->get();
        return $this->successResponse($notifications, 'Notifications finded');
    }

    public function show($id)
    {
        $notification = Notification::find($id);

        if (!$notification) {
            return $this->errorResponse(null, 'Checkout the data, notification not found');
        }
        return $this->successResponse($notification, 'Notification finded');
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'type' => 'required|in:Riego,Abono,Poda,Cambio de lugar,Cambio de maceta',
                'description' => 'required',
                'user_id' => 'required'
                //'event_id' => 'required',
            ]);
    
            $notification = Notification::create([
                'type' => $request->input('type'),
                'description' => $request->input('description'),
                'user_id' => $request->input('user_id'),
                /* 'event_id' => $request->input('event_id'), */
            ]);
    
            return $this->successResponse($notification, 'Notification stored');
        } catch (\Throwable $e) {
            return $this->errorResponse($e->errors(), $e->getMessage());
        }
      
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'type' => 'required|in:Riego,Abono,Poda,Cambio de lugar,Cambio de maceta',
                'description' => 'required',
                'user_id' => 'required',
                'is_viewed' => 'required'
                //'event_id' => 'required',
            ]);
    
            $notification = Notification::find($id);
    
            if (!$notification) {
                return $this->errorResponse(null, 'Notification not found');
            }
    
            $notification->update($request->all());
            return $this->successResponse($notification, 'Notification updated');
        } catch (\Throwable $e) {
            return $this->errorResponse($e->errors(), $e->getMessage());
        }

    }

    public function destroy($id)
    {
        try {
            $notification = Notification::find($id);

            if (!$notification) {
                return $this->errorResponse(null, 'Notification not found');
            }
    
            $notification->delete();
            return $this->successResponse($notification, 'Notification eliminated');
        } catch (\Throwable $e) {
            return $this->errorResponse($e->errors(), $e->getMessage());
        }

    }
}
