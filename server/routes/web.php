<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\PlantsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

//Todo Ver restricciones de admin rutas siguientes.Testear

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('admin.index');
    Route::get('/plants/index', [PlantsController::class, 'index'])->name('admin.plants.index');
    Route::get('/plants/create', [PlantsController::class, 'create'])->name('admin.plants.create');
    Route::post('/plants/store', [PlantsController::class, 'store'])->name('admin.plants.store');
    Route::get('/plants/{plant}/edit', [PlantsController::class, 'edit'])->name('admin.plants.edit');
    Route::get('/plants/{plant}', [PlantsController::class, 'show'])->name('admin.plants.show');
    Route::put('/plants/{plant}', [PlantsController::class, 'update'])->name('admin.plants.update');
    
    Route::delete('/plants/{plant}', [PlantsController::class, 'destroy'])->name('admin.plants.destroy');
    Route::resource('/light',  App\Http\Controllers\Admin\LightController::class); 
}); 

require __DIR__.'/auth.php';
