@extends('adminlte::page')

@section('title', 'Crear Plantas')

@section('css')
<!-- <link rel="stylesheet" href="/css/admin_custom.css"> -->
@endsection

@section('content_header')
    <div class="d-flex justify-content-between px-3">
        <h1>{{ __('Plantas') }}</h1>
        <a  class="btn btn-success rounded-pill"  href="{{route('admin.plants.create')}}"  ><i class="fas fa-plus"></i></a>
    </div>

@stop

@section('content')

<div class="card">
    <div class="card-body">



    <table class="table table-striped" id='plantsTable'>
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Ambiente</th>
                <th scope="col">Cantidad de luz</th>
                <!-- <th scope="col">Img</th> -->
                <th scope="col">Fecha_de_adquisicion</th>
                <!-- <th scope="col">Email Verificado</th> -->
                <th scope="col">Descripcion</th>
                <th scope="col">Image</th>
                <!--<th scope="col">User id </th>  -->
                <th scope="col">Acciones</th>
            </tr>
        </thead>

        <tbody>

            @foreach ($plants as $plant)
                <tr>
                    <td>{{$plant->name}} </td>
                    <td> {{$plant->environment->name}} </td> 
                    <td>{{$plant->light->name}} </td>
                    <td>{{$plant->date}} </td>
                    <td>{{$plant->description}} </td>
                    <td>{{$plant->image}} </td>
                    
                    <td>
                        <div class="d-flex justify-content-between">
                           <button type="button" onclick="window.location.href='{{ route('admin.plants.edit', ['id' => $plant->id]) }}'" class="btn btn-success rounded-pill mr-1"><i class="fas fa-edit"></i></button>
                           <button type="button" onclick="eliminarPlant({{ $plant->id }})" class="btn btn-danger rounded-pill"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                    <td> 

                        

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
      
        $('#plantsTable').DataTable({});
        
        function eliminarPlant(plantId) {
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
                        url: `/plants/${plantId}`,
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
                            Swal.fire('Error', `Ha ocurrido un error al eliminar la planta.`, 'error');
                        }
                    });
                }
            });
}

    </script>
@section('js')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@ensection
@stop