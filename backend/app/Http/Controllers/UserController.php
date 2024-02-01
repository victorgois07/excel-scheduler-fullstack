<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Listar todos os usuários
    public function index(Request $request)
        {
        $pageSize = $request->input('page_size', 10);
        $page = $request->input('page', 1);

        $users = User::paginate($pageSize, ['name', 'email', 'phone', 'status_send'], 'page', $page);

        return response()->json($users);
    }

    // Mostrar um único usuário
    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    // Atualizar um usuário
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        return response()->json($user);
    }

    // Alterar o status do agendamento de um usuário
    public function changeStatus(Request $request, $id)
    {
        $user = User::find($id);
        $user->status_do_envio = $request->status_do_envio;
        $user->save();
        return response()->json($user);
    }
}
