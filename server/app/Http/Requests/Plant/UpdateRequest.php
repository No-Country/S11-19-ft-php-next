<?php

namespace App\Http\Requests\Plant;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'environment_id' => ['required', 'exists:App\Models\Environment,id'],
            'light_id' => ['required', 'exists:App\Models\Light,id'],
            'date' => ['required'],
            'description' => ['string'],
            'image' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'name.required'=>'El campo Nombre es requerido.',
            'name.string'=>'El valor no es correcto.',

            'environment_id.required'=>'El campo Ambiente es requerido.',
            'environment_id.exists'=>'El ambiente no existe.',

            'light_id.required'=>'El campo Cantidad de luz es requerido.',
            'light_id.exists'=>'La cantidad de luz no existe.',

            'date.required'=>'El campo Fecha de adquisición es requerido.',
            
            'description.string'=>'El valor no es correcto.',

            'image.required'=>'Seleccione una Imagen para su planta.',
        ];
    }
}
