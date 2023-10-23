@extends('adminlte::page')

@section('title', 'Plants')

@section('content_header')
    <h1>Agregar planta</h1>
@stop

@section('content')
    <p>Welcome to this beautiful plants .</p>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop



@section('content_header')
    <div class="d-flex justify-content-between px-3">
        <h1>{{ __('Plants') }}</h1>
        <button type="button" class="btn btn-success rounded-pill"><i class="fas fa-plus"></i></button>
    </div>

@stop


<div class="card">
    <div class="card-body">



    <table class="table table-striped" id='plantsTable'>
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Ambiente</th>
                <th scope="col">Light</th>
                <!-- <th scope="col">Img</th> -->
                <th scope="col">Fecha</th>
                <th scope="col"> Descripcion</th>
                <th scope="col">Image</th>
                <!-- <th scope="col">Email Verificado</th> -->
                <th scope="col">Creado en</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>

        
    </table>

    </div>
</div>
@stop



@section('js')
    <script> console.log('Hi!'); </script>
@stop