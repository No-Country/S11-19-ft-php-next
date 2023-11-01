@extends('adminlte::page')

@section('title', 'Usuarios')

@section('css')
<!-- <link rel="stylesheet" href="/css/admin_custom.css"> -->
@endsection

@section('content_header')
    <div class="d-flex justify-content-between px-3">
        <h1>{{ __('Usuarios') }}</h1>
        <button type="button" class="btn btn-success rounded-pill" onclick="window.location.href='{{ route('admin.users.create') }}'"><i class="fas fa-plus"></i></button>
    </div>

@stop

@section('content')

<div class="card">
    <div class="card-body">



    <table class="table table-striped" id='usersTable'>
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <!-- <th scope="col">Img</th> -->
                <th scope="col">Rol</th>
                <!-- <th scope="col">Email Verificado</th> -->
                <th scope="col">Creado en</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>

        

        <tbody>

            @foreach ($users as $user)
                <tr>
                    <td>{{ $user->id }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->lastname }}</td>
                    <td>{{ $user->email }}</td>
                    <!-- <td>{{ $user->img }}</td> -->
                    <td>{{ $user->role->name }}</td>
                    <!-- <td>{{ date('d-m-Y', strtotime($user->email_verified_at)) }}</td> -->
                    <td>{{ date('d-m-Y', strtotime($user->created_at)) }}</td>
                    <td>
                        <div class="d-flex justify-content-between">
                        <button type="button" onclick="window.location.href='{{ route('admin.users.edit', ['id' => $user->id]) }}'" class="btn btn-success rounded-pill mr-1"><i class="fas fa-edit"></i></button>
                        <button type="button" onclick="eliminarUsuario({{ $user->id }})" class="btn btn-danger rounded-pill"><i class="fas fa-trash"></i></button>
                        </div>

                    </td>
                </tr>
            @endforeach


        </tbody>
    </table>

    </div>
</div>
@stop

@section('js')
 
    <script>
        $('#usersTable').DataTable({});
        
        function eliminarUsuario(userId) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: '¡No podrás revertir esto!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminarlo'
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        url: `/users/${userId}`,
                        type: 'DELETE',
                        headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                        success: function (data) {
                            if (data.success) {
                                Swal.fire({
                                    title: 'Éxito',
                                    text: 'El usuario ha sido eliminado correctamente.',
                                    icon: 'success',
                                    showConfirmButton: false
                        });
                                window.location.reload();
                            } else {
                                Swal.fire('Error', `Ha ocurrido un error al eliminar ${data.message}`, 'error');
                            }
                        },
                        error: function (e) {
                            console.log(e)
                            Swal.fire('Error', `Ha ocurrido un error al eliminar el usuario.`, 'error');
                        }
                    });
                }
            });
}

    </script>
@stop
