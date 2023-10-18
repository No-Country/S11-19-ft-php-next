<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlantsController;
use Illuminate\Database\Query\IndexHint;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/** Plants **/
Route::middleware('auth')->group(function () {
    Route::get('/plants', [PlantController::class, 'index']);
    Route::post('/plants/create', [PlantController::class, 'store']);
    Route::get('/plants/{plant}', [PlantController::class, 'show']);
    Route::put('/plants/update/{plant}', [PlantController::class, 'update']);
    Route::delete('/plants/delete/{plant}', [PlantController::class, 'destroy']);
});

