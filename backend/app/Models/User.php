<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'phone', 'status_send'];

    public function setPhoneAttribute($value)
    {
        empty($value) ? null : $this->attributes['phone'] = preg_replace('/\D/', '', $value);
    }

    public function getPhoneAttribute($value)
    {
        return empty($value) ? null : preg_replace('/(\d{2})(\d{4,5})(\d{4})/', '($1) $2-$3', $value);
    }

    public function scopeStatus($query, $status)
    {
        return $query->where('status_send', $status);
    }

    public function isPending()
    {
        return $this->status_send === 'Aguardando envio';
    }

    public function validateTelefone()
    {
        return preg_match('/^(\+?[\d\s]{10,15})$/', $this->phone);
    }
}
