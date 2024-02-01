<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\ProcessExcelFile;

class UploadController extends Controller
{
    /**
     * Handle the Excel file upload.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        set_time_limit(10000); // Define o limite de tempo para 120 segundos

        $request->validate([
            'file' => 'required|file|mimes:xlsx',
        ]);

        $path = $request->file('file')->store('excel_uploads');

        ProcessExcelFile::dispatch(storage_path('app/' . $path));

        return response()->json(['message' => 'Arquivo carregado e processamento iniciado.']);
    }
}
