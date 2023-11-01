<?php

use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ProfileController;
use Illuminate\Support\Facades\DB;
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
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('admin.users.destroy');
    Route::get('/users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('/users/store', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/users/edit/{id}', [UserController::class, 'edit'])->name('admin.users.edit');
    Route::patch('/users/update/{id}', [UserController::class, 'update'])->name('admin.users.update');

    /* Notifications admin, todavia falta arreglar esto por eso esta coment */
    /*
        Route::get('/notifications', [NotificationController::class, 'index']);

    Route::get('/notifications/{notification}', [NotificationController::class, 'show']);
    Route::put('/notifications/{notification}', [NotificationController::class, 'update']);
    Route::delete('/notifications/{notification}', [NotificationController::class, 'destroy']);
    */
});

Route::get('/test-database', function () {
    try {
        DB::connection()->getPdo();
        print_r('Connected successfully to: '.DB::connection()->getDatabaseName());
    } catch (\Exception $e) {
        exit('Could not connect to the database.  Please check your configuration. Error:'.$e);
    }
});

require __DIR__.'/auth.php';
