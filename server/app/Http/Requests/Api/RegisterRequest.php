<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'lastname' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                PasswordRules::min(8)->letters()->symbols()->numbers(),
            ],
        ];
    }

    public function messages()
    {
        return [
            'name' => 'El Nombre es obligatorio',
            'lastname' => 'El apellido es obligatorio',
            'email.required' => 'El Email es obligatorio',
            'email.email' => 'El email no es válido',
            'email.unique' => 'El usuario ya esta registrado',
            'password' => 'El password debe contener al menos 8 caracteres, un simbolo y un número',
        ];
    }
}
