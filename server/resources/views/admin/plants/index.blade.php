@extends('adminlte::page')

@section('title', 'Crear Plantas')

@section('css')
<!-- <link rel="stylesheet" href="/css/admin_custom.css"> -->
@endsection

@section('content_header')
    <div class="d-flex justify-content-between px-3">
        <h1>{{ __('Plantas') }}</h1>
        <button type="button" class="btn btn-success rounded-pill"><i class="fas fa-plus"></i></button>
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
                    <td> {{$plant->environments}} </td> 
                    <td>{{$plant->lights}} </td>
                    <td>{{$plant->date}} </td>
                    <td>{{$plant->description}} </td>
                    <td>{{$plant->image}} </td>
                    
                    <td>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-success rounded-pill mr-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-danger rounded-pill"><i class="fas fa-trash"></i></button>
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
        $('#plantsTable').DataTable({
  
});
    </script>
@stop