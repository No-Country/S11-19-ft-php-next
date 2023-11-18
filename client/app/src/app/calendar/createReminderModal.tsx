import React, {useEffect, useContext, useState} from 'react'
import { AuthContext } from '@/components/authcontext';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/services/axiosInstance';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { SubmitHandler, useForm } from "react-hook-form";
import {Input as InputVali, minLength, object, required, string, number} from "valibot";

export default function CreateReminderModal({setOpenModal, getReminders}:any) {
  const { userState} = useContext(AuthContext);
  /* const {register, handleSubmit, reset} = useForm() */
  const [choosedPlant, setChoosedPlant] = useState()
  const [choosedType, setChoosedtype] = useState("Riego")
  const [choosedTime, setChoosedTime] = useState("")
  const [plants, setPlants] = useState<[any] | []>([])
  const router = useRouter();
  useEffect(() => {
    axiosInstance
        .get("/plants/")
        .then((response) => {
            console.log(response.data);
            setPlants(response.data.data);
        })
        .catch((error) => {
            console.error("Error al obtener datos de plantas:", error);
        });
}, []);
  const handleChange = (newValue:any) => {
    if(newValue.target.name === 'planta') {
      console.log("cambia planta")
			console.log("newValue.target: ", newValue.target)
			console.log("plants[newValue.target.value].id: ", plants[newValue.target.value].id)
      setChoosedPlant(plants[newValue.target.value].id)
    }else if (newValue.target.name === 'tipo'){
			console.log("cambia tipo ")
      setChoosedtype(newValue.target.value)
      
    }else if (newValue.target.name === 'time'){
      setChoosedTime(newValue.target.value)
      console.log(newValue.target.value);
			console.log("cambia time")
    }
  }

	/* const ReminderSchema = object({
		name: string(),
		frequency: string(),
		date: string(),
		time: string(),
		type: string(),
		repeat: number(),
		plant_id: number() || string()
	}); */

	const {
		register,
		handleSubmit,
		getValues,
		setError, reset,
		formState: { errors, isSubmitted },
	} = useForm(/* {
		resolver: valibotResolver(ReminderSchema),
		defaultValues: {
			name: "",
			frequency: "",
			date: "",
			time: "",
			type: "",
			repeat: 0,
			plant_id: null
		},
		
	} */);


	const onSubmit =  (data:any) => {
		/* console.log(formState.errors) */
	
		console.log("dataForm: ", data)
		const formData = {
			name: choosedType,
			frequency: data.frequency,
			date: data.date,
			time: choosedTime,
			type: "Irrigation",
			repeat: 0,
			plant_id: choosedPlant
		}
		console.log(formData);
		
		axiosInstance
		.post("/reminder/", JSON.stringify(formData))
		.then((response) => {
				console.log(response.data);
				/* if (typeof window !== 'undefined') {
					window.location.reload()
				} */
				
				getReminders()
				reset()
				setOpenModal(false)
		})
		.catch((error) => {
				console.error("Error al obtener datos de plantas:", error);
		});
		
	}
	const onErrors = (data:any) => {
		const valores = getValues()
		console.log("valore: ", valores)
		console.log("onError data: ",data)
	}


  return (
    <article className='fixed w-screen h-screen flex justify-center items-center bg-black bg-opacity-30'>
      <div className='bg-background  px-10 py-10 rounded-md'>
      <h2 className='text-marron-oscuro font-semibold text-center   text-xl'>Recordatorios</h2>
      <form onSubmit={handleSubmit(onSubmit,onErrors )}>
        <label htmlFor="tipo" className="block mt-5">
					Ambiente*
				</label>
        <select
          id="tipo"
          onChange={handleChange}
					/* value={choosedType} */
          name="tipo"
          required
          className="px-4 py-3 w-[289px] border-2 rounded-lg block border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
        >
          <option value="Riego">Riego</option>
          <option value="Cambio de Maceta">Cambio de Maceta</option>
          <option value="Abono">Abono</option>
          <option value="Cambio de lugar">Cambio de lugar</option>
          <option value="Poda">Poda</option>
        </select>
        <label htmlFor="planta" className="block mt-5">
					Planta*
				</label>
        <select
          onChange={handleChange}
					/* value={choosedPlant} */
          id="planta"
           /* {...register("name",  { required: true })} */
          name="planta"
          required
          className="px-4 py-3 w-[289px] border-2 rounded-lg block border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
        >
          <option value="" >Escoge una planta</option> {/* Mueve esta opción fuera del mapeo */}
          {plants.length > 0 ? (
            plants.map((plant, index) => (
              <option key={index} value={index} > {/* Usar plant.name para el valor */}
                {`${plant.name}  ${index}`}
              </option>
            ))
          ) : (
            <option value="">No tienes plantas aún</option>
          )}
        </select>
        <label htmlFor="fecha" className='block mt-5'>Fecha*</label>
        <input
          type="date"
          {...register("date",  { required: true })}
          required
          id="fecha"
          className="px-4 py-3 block w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
          placeholder="fecha"
        />
        <label htmlFor="time" className='block mt-5'>Hora*</label>
        <input 
					onChange={handleChange}
					value={choosedTime}
					type="time" 
					name="time"
					id="hora" 
					className="px-4 py-3 block w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
        />
         <label htmlFor="periodicidad" className="block mt-5">
					Perodicidad*
				</label>
        <select
          id="periodicidad"
          {...register("frequency",  { required: true })}
          name="periodicidad"
          required
          className="px-4 py-3 w-[289px] border-2 rounded-lg block border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
        >
					{/* <option disabled selected></option>   con esto se muestra vacio para que el usuario no asuma preseleccionado */}
          <option value="Semanalmente">Semanalmente</option>
          <option value="Quincenalmente">Quincenalmente</option>
          <option value="Mensualmente">Mensualmente</option>
          <option value="Anualmente">Anualmente</option>
        </select>
        <div className="flex justify-center gap-2">
							<button
                onClick={() => setOpenModal(false)}
								className="font-semibold  justify-center hover:bg-primary ease-out duration-300 mt-16 w-32 bg-transparent border-2 border-primary text-primary gap-3 items-center flex hover:text-white  px-1 py-1"
							>
								Cancelar
							</button>

              <button type='submit' className="font-semibold  justify-center hover:bg-[#427d61] ease-out duration-300 mt-16 w-32 bg-primary gap-3 items-center flex text-white  px-1 py-2">
								Guardar
							</button>								
						</div>
      </form>
      </div>
    </article>
  )
}
