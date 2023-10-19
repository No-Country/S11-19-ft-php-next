<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\PlantsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReminderController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Auth User
Route::post('/login', [AuthController::class, 'login'])->name('api.login');
Route::post('/register', [AuthController::class, 'register'])->name('api.register');
//Route::post('/logout', [AuthController::class, 'logout'])->name('api.logout');
Route::resource('reminder', ReminderController::class)->except('create', 'edit');

/* Plants **/
Route::middleware('auth')->group(function () {
    Route::get('/plants', [PlantsController::class, 'index']);
    Route::post('/plants/create', [PlantsController::class, 'store']);
    Route::get('/plants/{plant}', [PlantsController::class, 'show']);
    Route::put('/plants/update/{plant}', [PlantsController::class, 'update']);
    Route::delete('/plants/delete/{plant}', [PlantsController::class, 'destroy']);
});
