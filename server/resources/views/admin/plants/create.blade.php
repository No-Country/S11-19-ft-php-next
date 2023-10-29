@extends('adminlte::page')

@section('title', 'Nueva Planta')

@section('content_header')
    <h1>Crear nueva Planta</h1>
@stop
@section('content')
    <p>Bienvenido al panel de creación de plantas.</p> 
<div class="card">
    <div class="card-body">
       {!! Form::open(['route'=>'admin.plants.store']) !!} 

       @csrf 
       @include('admin.plants.form')
             
    </div>
</div>
   
@stop


