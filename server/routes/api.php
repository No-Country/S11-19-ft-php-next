<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PlantsController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ReminderController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\ProfileController;

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

//Auth User
Route::post('/login', [AuthController::class, 'login'])->name('api.login');
Route::post('/register', [AuthController::class, 'register'])->name('api.register');

/* Rutas que requieren autenticacion */
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('api.logout');
    Route::get('/profile/user', [ProfileController::class, 'showProfile']);
    Route::put('/profile/update', [ProfileController::class, 'updateProfile']);
    Route::put('/profile/update/password', [ProfileController::class, 'updatePassword']);
    
    Route::resource('/reminder', ReminderController::class)->except('create', 'edit');

    Route::get('/plants', [PlantsController::class, 'index']);
    Route::post('/plants/create', [PlantsController::class, 'store']);
    Route::get('/plants/{plant}', [PlantsController::class, 'show']);
    Route::put('/plants/update/{plant}', [PlantsController::class, 'update']);
    Route::delete('/plants/delete/{plant}', [PlantsController::class, 'destroy']);

    Route::get('notifications', [NotificationController::class, 'index']); 
    Route::put('notifications/{id}', [NotificationController::class, 'update']);
    Route::get('notifications/channel', [NotificationController::class, 'unread']);
/*     Route::post('/notifications', [NotificationController::class, 'store']); */
});
