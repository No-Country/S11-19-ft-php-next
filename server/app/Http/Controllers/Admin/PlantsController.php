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
    public function edit($id){
        $plant= Plant::find($id);
        $lights= Light::pluck('name');
        $environments= Environment::pluck('name');
        return view('admin.plants.edit', compact('plant','lights','environments'));
        //return view('admin.plants.edit', compact('plant','id'));
    }
    
    public function show(Plant $plant)
    {
        return view('admin.plants.show', compact('plant'));
    }
  /*  public function update(UpdateRequest $request, Plant $plant)
    {   //falta colocar require sino no no funciona
        $request -> validated([
            'name' => 'require',
            'environment_id' => 'required',
            'light_id' => 'required',
            'date' => 'required',
            'description' => 'required',
            'image' => 'sometimes|required:NULL',
            'user_id' => auth()->id(),
        ]);
        $plant->update($request->all());
        return redirect()->route('admin.plants.show',$plant)->with('info','se actualizo con exit');
    }*/
    public function  update(Request $request, Plant $plant){
        $plant->name = $request-> name;
        $plant->environment_id = $request-> enviroment_id;
        $plant->light_id = $request-> light_id;
        $plant-> date= $request-> date;
        $plant-> description= $request-> description;
        $plant-> image= $request->image ;
        $plant->save();
        return redirect()->route('admin.plants.show', $plant);
    }

    public function destroy(Plant $plant) //no elimina
    {
        $plant->delete();
        return redirect()->route('admin.plants.index',$plant);//->with('info',' se elimino con exit');
    } 

   
}