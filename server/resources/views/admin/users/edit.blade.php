@extends('adminlte::page')

@section('title', 'Usuarios')

@section('css')
<!-- <link rel="stylesheet" href="/css/admin_custom.css"> -->
@endsection

@section('content_header')
    <div class="d-flex justify-content-between px-3">
        <h1>{{ __('Usuarios') }}</h1>
        <!-- <button type="button" class="btn btn-success rounded-pill"><i class="fas fa-plus"></i></button> -->
    </div>

@stop

@section('content')

    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card">
                <div class="card-header">Actualizar Usuario</div>

                <div class="card-body">
                    <form method="POST" id="userForm">
                        @csrf

                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" value="{{ $user->name }}" id="nombre" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="apellido">Apellido</label>
                            <input type="text" class="form-control" value="{{ $user->lastname }}" id="apellido" name="lastname" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input type="email" class="form-control" value="{{ $user->email }}" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="password">Contraseña</label>
                            <input type="text" class="form-control"  id="password" name="password" >
                        </div>

                        <div class="form-group">
                            <label for="rol">Rol</label>
                            <select class="form-control" id="rol" name="role_id">
                                <option value="1">Admin</option>
                                <option value="2">Usuario</option>
                            </select>
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
                url: '/users/update/{{ $user->id }}',
                data: $(this).serialize(), 
                success: function(data) {
                    Swal.fire({
                            title: 'Éxito',
                            text: 'El usuario ha sido actualizado correctamente.',
                            icon: 'success',
                            showConfirmButton: false
                        });
                    window.location.href = '/users';
                },
                error: function(error) {
                    console.log(error)
                    Swal.fire('Error', 'Ha ocurrido un error al crear el usuario.', 'error');
                }
            });
        });
    });

    </script>
@stop
