<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ReminderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reminders = Reminder::all()
        ->get();

        if($reminders){
            return response()->json(['Reminder' => $reminders], 200);
        }else{
            return response()->json(['message' => 'Reminder not found'], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'attention' => 'required|string',
                'plant_id' => 'required|numeric',
                'date' => 'required|date',
                'time' => 'required|time',
                'alert' => 'required|date'
            ]);
            $encryptedId = Auth::user()->getAuthIdentifier();
            $pack = Reminder::create([
                'name' => $validatedData['name'],
                'attention' => $validatedData['attention'],
                'plant_id' => $validatedData['plant_id'],
                'date' => $validatedData['date'],
                'alert' => $validatedData['alert'],
                'user_id' => $encryptedId,
            ]);

            return response()->json(['Reminder created' => $pack], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($user_id)
    {
        $reminder = Reminder::find($user_id)
        ->get();

        if($reminder){
            return response()->json(['Reminder' => $reminder], 200);
        }else{
            return response()->json(['message' => 'Reminder not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $reminder = Reminder::find($id);

        if($reminder){
            try {

                $validatedData = $request->validate([
                    'name' => 'required|string',
                    'attention' => 'required|string',
                    'plant_id' => 'required|numeric',
                    'date' => 'required|date',
                    'time' => 'required|time',
                    'alert' => 'required|date'
                ]);

                $reminder->update([
                    'name' => $validatedData['name'],
                    'attention' => $validatedData['attention'],
                    'plant_id' => $validatedData['plant_id'],
                    'date' => $validatedData['date'],
                    'alert' => $validatedData['alert'],
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

    /**
     * Remove the specified resource from storage.
     */
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
