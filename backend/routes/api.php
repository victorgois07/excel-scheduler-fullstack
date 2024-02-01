<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;

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

// Rota para o upload do arquivo Excel
Route::post('/upload', [UploadController::class, 'store']);

// Rotas para operações de usuário
Route::get('/users', [UserController::class, 'index']);       // Listar todos os usuários
Route::get('/users/{id}', [UserController::class, 'show']);    // Exibir um único usuário
Route::put('/users/{id}', [UserController::class, 'update']);  // Atualizar um usuário
Route::patch('/users/{id}/status', [UserController::class, 'changeStatus']);
Route::get('/status/check', [StatusController::class, 'checkStatus']);
