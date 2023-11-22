<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reminder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ReminderController extends Controller
{
    public function index()
    {
        $reminders = Reminder::with("Plant")
        ->get();

        if($reminders){
            return response()->json(['Reminder' => $reminders], 200);
        }else{
            return response()->json(['message' => 'Reminder not found'], 404);
        }
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'frequency' => 'required|string',
                'date' => 'required|date',
                'time' => 'required|date_format:H:i',
                'type' => 'required|string',
                'repeat' => 'required|boolean',
                'plant_id' => 'required|numeric',
            ]);
            $encryptedId = Auth::user()->getAuthIdentifier();
            $reminder = Reminder::create([
                'name' => $validatedData['name'],
                'frequency' => $validatedData['frequency'],
                'date' => $validatedData['date'],
                'time' => $validatedData['time'],
                'type' => $validatedData['type'],
                'repeat' => $validatedData['repeat'],
                'plant_id' => $validatedData['plant_id'],
                'user_id' => $encryptedId,
            ]);

            return response()->json(['Reminder created' => $reminder], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function show($user_id)
    {
        $reminder = Reminder::find($user_id)
        ->with("Plant")
        ->get();

        if($reminder){
            return response()->json(['Reminder' => $reminder], 200);
        }else{
            return response()->json(['message' => 'Reminder not found'], 404);
        }
    }

    public function update(Request $request,$id)
    {
        $reminder = Reminder::find($id);

        if($reminder){
            try {

                $validatedData = $request->validate([
                    'name' => 'required|string',
                    'frequency' => 'required|string',
                    'date' => 'required|date',
                    'time' => 'required|date_format:H:i',
                    'type' => 'required|string',
                    'repeat' => 'required|boolean',
                    'plant_id' => 'required|numeric',
                ]);

                $reminder->update([
                    'name' => $validatedData['name'],
                    'frequency' => $validatedData['frequency'],
                    'date' => $validatedData['date'],
                    'time' => $validatedData['time'],
                    'type' => $validatedData['type'],
                    'repeat' => $validatedData['repeat'],
                    'plant_id' => $validatedData['plant_id'],
                ]);

                return response()->json(['Reminder updated' => $reminder], 200);

            } catch (ValidationException $e) {
                return response()->json([
                    'error' => 'Invalidated data',
                    'message' => $e->getMessage(),
                    'errors' => $e->errors()
                ], 400);
            }
        }else{
            return response()->json(['message' => 'Reminder not found'], 404);
        }
    }

    public function destroy(string $id)
    {
        $reminder = Reminder::find($id);

        if($reminder){
            $reminder->delete();
            return response()->json(['Reminder' => 'Reminder deleted'], 200);
        }else{
            return response()->json(['message' => 'Reminder not found'], 404);
        }
    }
}
