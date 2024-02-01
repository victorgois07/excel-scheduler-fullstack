<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobStatus;

class StatusController extends Controller
{
    /**
     * Verifica o status de um job de processamento.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function checkStatus(Request $request)
    {
        $jobName = $request->input('job_name');

        $status = JobStatus::where('job_name', $jobName)->latest()->first();

        if ($status) {
            return response()->json([
                'status' => $status->status,
                'message' => 'Status do job encontrado.',
                'job_details' => $status
            ]);
        } else {
            return response()->json([
                'message' => 'Status do job não encontrado.',
            ], 404);
        }
    }
}
