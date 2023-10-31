<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Plant;
use App\Models\Light;
use App\Models\Environment;
use App\Http\Requests\Plant\StoreRequest;
use App\Http\Requests\Plant\UpdateRequest;
use Illuminate\Http\Request;
class PlantsController extends Controller
{
    public function index()
    { 
        $plants = Plant::all();
         return view('admin.plants.index', compact('plants'));
    }
    public function create() {
        $plant = new Plant();
        $lights= Light::pluck('name','id');
        $environments= Environment::pluck('name','id');
        return view('admin.plants.create', compact('plant', 'lights', 'environments'));
    }
    public function store(Request $request)
    {  
      $plant =Plant::create($request->all());
       return redirect()->route('admin.plants.index');
    }
    public function show(Plant $plant)
    {
       // return view('admin.plants.show', compact('plant'));
    }
    public function edit($id){
        $plant= Plant::find($id);
       // $lights= Light::pluck('name');
       // $environments= Environment::pluck('name');
       // return view('admin.plants.edit', compact('plant','lights','environments'));
        return view('admin.plants.edit', ['plant'=>$plant]);
    }
    
    public function update(Request $request, string $id)
    {
        try {
            
            $request->validate([
        'name' => 'nullable|string',
        'environment_id' => 'nullable|integer',
        'light_id' => 'nullable|integer',
        'date' => 'nullable|date', 
        'description' => 'nullable|string',
        'image' => 'nullable|string',
        'user_id' => 'nullable|integer',
    ]);
     $plant = Plant::findOrFail($id);
       // $user->name = $request->input('name');

        $plant->name = $request->input('name');
        $plant->environment_id = $request->input('environment_id');
        $plant->light_id = $request->input('light_id');
        $plant->date= $request->input('date');
        $plant->description= $request->input('description');
        $plant->image= $request->input('image') ;
        $plant->user_id=$request->input('user_id');


        $plant->save();
       // return redirect()->route('admin.plants.show', $plant);
       return response()->json(['success' => true, 'message' => 'Planta actualizado correctamente']);
    } catch (\Throwable $th) {
        return response()->json(['success' => false, 'message' => 'La planta no se pudo actualizar']);
    }

}


   // public function destroy(Plant $plant) //no elimina
    //{
     //   $plant->delete();
     //   return redirect()->route('admin.plants.index',$plant);//->with('info',' se elimino con exit');
    //} 
    public function destroy(string $id)
    {
    $plant = Plant::find($id);

    if ($plant) {
        $plant->delete();
        return response()->json(['success' => true, 'message' => 'Usuario eliminado correctamente']);
    } else {
        return response()->json(['success' => false, 'message' => 'El usuario no existe o no se pudo eliminar']);
    }
    }


   
}