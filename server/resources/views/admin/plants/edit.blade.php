@extends('adminlte::page')

@section('title', 'Editar Planta')

@section('content_header')
    <h1>Editar Planta</h1>
@stop
@section('content')
    <p>Bienvenido al panel de editar  planta.</p> 
    @if(session('info')) <div class="alert alert success"><strong>{{session('info')}}</strong>@endif
<div class="card">
    <div class="card-body">
        <form action="{{ route('admin.plants.update', $plant) }}" method="POST" > 
        
        @csrf 
        @include('admin.plants.form')
        </form>     
    </div>
</div>

   @endsection 



