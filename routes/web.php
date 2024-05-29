<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

Route::middleware('guest')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::post('/', [DashboardController::class, 'verify'])->name('verify');
});