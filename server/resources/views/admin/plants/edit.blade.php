@extends('adminlte::page')

@section('title', 'Editar Plant')

@section('css')
<!-- <link rel="stylesheet" href="/css/admin_custom.css"> -->
@endsection

@section('content_header')
    <div class="d-flex justify-content-between px-3">
        <h1>{{ __('Editar Planta') }}</h1>
        <!-- <button type="button" class="btn btn-success rounded-pill"><i class="fas fa-plus"></i></button> -->
    </div>

@stop

@section('content')

    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card">
                <div class="card-header">Actualizar Planta</div>

                <div class="card-body">
                    <form method="POST" id="userForm">
                        @csrf

                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" class="form-control" value="{{ $plant->name }}" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="environment_id">Ambiente</label>
                            <select class="form-control" id="environment_id" name="environment_id">
                                <option value="1">Interior</option>
                                <option value="2">Exterior</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="light_id">Cantidad de luz</label>
                            <select class="form-control" id="light_id" name="light_id">
                                <option value="1">Directa</option>
                                <option value="2">Indirecta</option>
                                <option value="3">Sombra</option>
                            </select>
                        </div>
                       
                        <div class="form-group">
                            <label for="date">Fecha</label>
                            <input type="date" class="form-control" value="{{ $plant->date }}"  id="date" name="date" >
                        </div>
                        <div class="form-group">
                            <label for="description">Descripcion</label>
                            <input type="text" class="form-control"  value="{{ $plant->description }}" id="description" name="description" >
                        </div>
                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="text" class="form-control" value="{{ $plant->image }}"  id="image" name="image" >
                        </div>
                        <div class="form-group">
                            <label for="user_id">Usuario</label>
                            <input type="text" class="form-control" value="{{ $plant->user_id }}"   id="user_id" name="user_id" >
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop

@section('js')
 
    <script>
    $(document).ready(function() {
        $('#userForm').on('submit', function(event) {
            event.preventDefault(); 

            $.ajax({
                type: 'PATCH',
                url: '/plants/update/{{ $plant->id }}',
                data: $(this).serialize(), 
                success: function(data) {
                    Swal.fire({
                            title: 'Éxito',
                            text: 'La planta ha sido actualizado correctamente.',
                            icon: 'success',
                            showConfirmButton: false
                        });
                    window.location.href = '/plants';
                },
                error: function(error) {
                    console.log(error)
                    Swal.fire('Error', 'Ha ocurrido un error al crear el usuario.', 'error');
                }
            });
        });
    });

    </script>
    @section('js')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@ensection
@stop


