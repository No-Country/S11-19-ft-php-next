<div class="box box-info padding-1">
    <div class="box-body">
        <div class="form-group"> 
            {!! Form::label('name', 'Nombre') !!}  
            {!! Form::text('name',null, ['class'=> 'form-group', 'placeholder'=>'Ejemplo Rosas yellow '])  !!}
        </div>
        <div class="form-group">
            <label for="">Ambiente" </label> 
            {!!Form::select('environment_id',$environments, $plant->environment_id, ['class'=> 'form-control', 'placeholder'=>'Seleccione el ambiente de la Planta'])!!}
        </div>
        
        <div class="form-group">
            <label for=""> Cantidad de luz</label>
            {!!Form::select('light_id',$lights, $plant->light_id, ['class'=>'form-control', 'placeholder'=>'Ninguno'])!!}
        </div>
        <div class="form-group">
            {!! Form::label('date', 'Fecha de adquisicion') !!}  
            {!! Form::date('date',null, ['class'=> 'form-group', 'placeholder'=>'00/00/0000'])  !!}
        </div>
        <div class="form-group">
            {!! Form::label('description', 'Observaciones') !!}  
            {!! Form::text('description',null, ['class'=> 'form-group', 'placeholder'=>'Ej: Cambio de color'])  !!}
        </div>
        <div class="form-group">
            {!! Form::label('image', 'Imagen') !!}  
            {!! Form::text('image',null, ['class'=> 'form-group', 'placeholder'=>'Url de la imagen'])  !!}
        </div>
        <div class="form-group">
            {!! Form::label('user_id', 'usuario') !!}  
            {!! Form::text('user_id',null, ['class'=> 'form-group', 'placeholder'=>'Nombre de la Planta'])  !!}
        </div>
        {!! Form:: submit('!! Enviar !!', ['class'=>'btn btn-primary']) !!}
        {!!Form::close() !!}
    </div>
</div>
</div> 

   
