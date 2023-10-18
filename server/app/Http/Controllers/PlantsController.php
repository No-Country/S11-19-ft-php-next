<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use App\Http\Requests\Plant\StoreRequest;
use App\Http\Requests\Plant\UpdateRequest;
use Illuminate\Http\Request;

class PlantsController extends Controller
{
    public function index()
    {
        $plants = Plant::
        join('environments', 'plants.environment_id', '=', 'environments.id')
        ->join('amount_light', 'plants.light_id', '=', 'amount_light.id')
        ->select('plants.id', 'plants.name', 'environments.name as ambient', 'amount_light.name as light', 'plants.date', 'plants.description', 'plants.image')
        ->where('plants.user_id', '=', auth()->id())
        ->get();
        return response([
            "status" => 200,
            "data" => $plants
        ],200);
    }

    public function store(StoreRequest $request)
    {
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
        return response([
            "status" => 200,
            "message" => "Created plant successfully",
            "data" => $plant
        ],200);
    }

    public function show(Plant $plant)
    {
        $plant = Plant::
        join('environments', 'plants.environment_id', '=', 'environments.id')
        ->join('amount_light', 'plants.light_id', '=', 'amount_light.id')
        ->select('plants.id', 'plants.name', 'environments.name as ambient', 'amount_light.name as light', 'plants.date', 'plants.description', 'plants.image')
        ->where('plants.user_id', '=', auth()->id())
        ->where('plants.id', '=', $plant->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $plant
        ],200);
    }

    public function update(UpdateRequest $request, Plant $plant)
    {
        $plant->update($request->input());
        return response([
            "status" => 200,
            "message" => "Updated plant successfully",
            "data" => $plant
        ],200);
    }

    public function destroy(Plant $plant)
    {
        $plant->delete();
        return response([
            "status" => 200,
            "message" => "Deleted plant successfully"
        ],200);
    }
}
