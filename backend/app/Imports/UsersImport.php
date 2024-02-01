<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Log;

class UsersImport implements ToModel
{
    private $firstRow = true;

    public function model(array $row)
    {
        if ($this->firstRow && $row[0] === 'Nome' && $row[1] === 'Contato') {
            $this->firstRow = false;
            return null;
        }

        $this->firstRow = false;
        $contact = $row[1];
        $isEmail = filter_var($contact, FILTER_VALIDATE_EMAIL) !== false;

        if (empty($contact)) {
            return null;
        }

        if (User::where('email', $contact)->exists() || User::where('phone', $contact)->exists()) {
            return null;
        }

        return new User([
            'name' => $row[0],
            'email' => $isEmail ? $contact : null,
            'phone' => !$isEmail ? $contact : null,
            'status_send' => 'Aguardando envio',
        ]);
    }
}
