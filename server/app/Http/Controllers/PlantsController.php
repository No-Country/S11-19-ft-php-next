<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use App\Http\Requests\Plant\StoreRequest;
use App\Http\Requests\Plant\UpdateRequest;
use App\Traits\ApiResponse;

class PlantsController extends Controller
{
    use ApiResponse;
    public function index()
    {
        $plants = Plant::
        join('environments', 'plants.environment_id', '=', 'environments.id')
        ->join('lights', 'plants.light_id', '=', 'lights.id')
        ->select('plants.id', 'plants.name', 'environments.name as ambient', 'lights.name as light', 'plants.date', 'plants.description', 'plants.image')
        ->where('plants.user_id', '=', auth()->id())
        ->get();
      
        if (!$plants) {
            return response(["message" => 'There are no plants'],200);
        }
        return $this->successResponse($plants, 'Plants of the user');
    }

    public function store(StoreRequest $request)
    {
        try {
            $plant = new Plant([
                'name' => $request->name,
                'environment_id' => $request->environment_id,
                'light_id' => $request->light_id,
                'date' => $request->date,
                'description' => $request->description,
                'image' => $request->image,
                'user_id' => auth()->id()
            ]);
            $plant->save();
            if ($request->hasfile('image')){
                $plant->addMediaFromRequest('image')->toMediaCollection('Plants');
            }

            return $this->successResponse($plant, 'Created plant successfully');
        } catch (\Throwable $e) {
            return $this->errorResponse($e->getMessage());
        }
    }

    public function show($id)
    {
        $plant = Plant::
        join('environments', 'plants.environment_id', '=', 'environments.id')
        ->join('lights', 'plants.light_id', '=', 'lights.id')
        ->select('plants.id', 'plants.name', 'environments.name as ambient', 'lights.name as light', 'plants.date', 'plants.description', 'plants.image')
        ->where('plants.user_id', '=', auth()->id())
        ->where('plants.id', '=', $id)
        ->get();
        
        if (count($plant) == null) {
            return response(["message" => 'Plant not found'],200);
        }

         return response([
            "status" => 'success',
            "data" => $plant
        ],200);        
    }

    public function update(UpdateRequest $request, $id)
    {
        try {
            $plant = Plant::findOrFail($id);

            $plant->update([
                'name' => $request->name,
                'environment_id' => $request->environment_id,
                'light_id' => $request->light_id,
                'date' => $request->date,
                'description' => $request->description,
            ]);

            if ($plant->hasMedia('Plants')) {
                $plant->clearMediaCollection('Plants');
            }
            $plant->addMediaFromRequest('image')->toMediaCollection('Plants');

            return $this->successResponse($plant, 'Updated plant successfully');
        } catch (\Throwable $e) {
            return $this->errorResponse($e->getMessage());
        }
    }

    public function destroy(Plant $plant)
    {
        $plant->delete();
        if ($plant->hasMedia('Plants')) {
            $plant->clearMediaCollection('Plants');
        }
        return response([
            "status" => 200,
            "message" => "Deleted plant successfully"
        ],200);
    }
}
