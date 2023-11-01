<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PlantsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReminderController;
use Illuminate\Support\Facades\Route;

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

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With');

Route::group(['middleware' => ['cors']], function () {
    //Auth User
    Route::post('/login', [AuthController::class, 'login'])->name('api.login');
    Route::post('/register', [AuthController::class, 'register'])->name('api.register');
});

/* Rutas que requieren autenticacion */
Route::group(['middleware' => ['cors', 'auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('api.logout');
    Route::get('/profile/user', [ProfileController::class, 'showProfile']);
    Route::put('/profile/update', [ProfileController::class, 'updateProfile']);
    Route::put('/profile/update/password', [ProfileController::class, 'updatePassword']);

    Route::get('/reminder', [ReminderController::class, 'index']);
    Route::post('/reminder', [ReminderController::class, 'store']);
    Route::get('/reminder/{reminder}', [ReminderController::class, 'show']);
    Route::put('/reminder/{reminder}', [ReminderController::class, 'update']);
    Route::delete('/reminder/{reminder}', [ReminderController::class, 'destroy']);

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
