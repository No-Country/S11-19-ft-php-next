import React, {useEffect, useContext, useState} from 'react'
import { AuthContext } from '@/components/authcontext';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/services/axiosInstance';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { SubmitHandler, useForm } from "react-hook-form";
import {Input as InputVali, minLength, object, required, string, number, minValue} from "valibot";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useReminderStore } from './store';

export default function EditReminderModal({setEditOpenModal, getReminders}:any) {
  const { userState, logOutUser} = useContext(AuthContext);
  const [plants, setPlants] = useState<[any] | []>([])
  const router = useRouter();
	const { reminder } = useReminderStore()

useEffect(() => {

	if ( userState?.token ) {
		axios.get("https://garden-wise-app.fly.dev/api/plants/", 
			{
				headers: {
				"Content-Type": "application/json",
				"Authorization":`Bearer ${userState.token}`
			}
		})
		.then( response => {
			setPlants(response.data.data)
		}) 
		.catch( err => {
			if (err.response?.data?.message === "Unauthenticated") {
				logOutUser(router.push("/login"))
			} else console.log("ERR: ", err)
		}) 
	}
}, []);

	const ReminderSchema = object({
		name: string([minLength(1)]),
		frequency: string([minLength(1)]),
		date: string([minLength(1)]),
		time: string([minLength(1)]),
		type: string([minLength(1)]),
		repeat: number([minValue(0)]),
		plant_id: string()
	});

	const {
		register,
		handleSubmit,
		getValues,
		setError, reset,
		formState: { errors, isSubmitted },
	} = useForm({
		resolver: valibotResolver(ReminderSchema),
		defaultValues: {
			created_at:reminder?.created_at,
			date: reminder?.date,
			frequency: reminder?.frequency,
			id:reminder?.id,
			name: reminder?.name,
			plant:reminder?.plant,
			plant_id: reminder?.plant.name,
			repeat: 0,
			time: reminder?.time,
			type: "Irrigation",
			updated_at:reminder?.updated_at,
			user_id:reminder?.user_id
		},
		
	});


	const onSubmit =  (data:any) => {
		if (data.name === "" || data.plant_id === "" || data.frequency === "") {

		}
		const formData = {
			_method:"put",
			created_at:reminder?.created_at,
			date: data.date,
			frequency: data.frequency,
			id:reminder?.id,
			name: data.name,
			plant:reminder?.plant,
			plant_id: reminder?.plant.id,
			repeat: 0,
			time: data.time,
			type: "Irrigation",
			updated_at:reminder?.updated_at,
			user_id:reminder?.user_id
		}

		axios.post("https://garden-wise-app.fly.dev/api/reminder", formData, {
			headers: {
			"Content-Type": "application/json",
			"Authorization":`Bearer ${userState.token}`
		}
	  }) 
		.then((response) => {
				console.log("response en edit: ",response);	
				if (response.status === 201 || response.status === 200) {
					getReminders()
					setEditOpenModal(false)
					Swal.fire({
						title: 'Recordatorio actualizado',
						icon: 'success',
						confirmButtonText: 'cerrar',
						timer:3000
					})
				} else {
					Swal.fire({
						title: 'Error!',
						text: 'No se pudo actualizar el recordatorio',
						/* icon: 'error', */
						confirmButtonText: 'cerrar',
						timer:3000
					})
				}
		})
		.catch((error) => {
				console.error("Error al obtener datos de plantas:", error);
		});
		
	}
	const onErrors = (data:any) => {
		const valores = getValues()
		console.log("valores: ", valores)
		console.log("onError data: ",data)
	}
	console.log("reminder en edit", reminder)

  return (
    <article className='fixed inset-0 z-50 w-screen flex justify-center items-center content-center bg-black bg-opacity-30'>
      <div className='bg-background  px-10 py-2  rounded-md'>
				<h2 className='text-marron-oscuro font-semibold text-center   text-xl'>Recordatorios</h2>
				<form onSubmit={handleSubmit(onSubmit,onErrors )} className='mt-5' >
					<label htmlFor="tipo" className="block mt-5">
						Ambiente*
					</label>
					<select
						id="tipo"
						{...register("name",  { required: true })} 
						className="px-4 py-2 w-[289px] border-2 rounded-lg block border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
					>
						<option value="" >Elige una opción</option>
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
						id="planta"
						{...register("plant_id",  { required: true })}
						className="px-4 py-2 w-[289px] border-2 rounded-lg block border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
					>
						<option> 
									{`${reminder?.plant.name}`}
						</option>
					</select>
					<label htmlFor="fecha" className='block mt-5'>Fecha*</label>
					<input
						type="date"
						{...register("date",  { required: true })}
						id="fecha"
						className="px-4 py-2 block w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
						placeholder="fecha"
					/>
					<label htmlFor="time" className='block mt-5'>Hora*</label>
					<input 
						{...register("time",  { required: true })}
						type="time" 
						id="hora" 
						className="px-4 py-2 block w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
					/>
					<label htmlFor="periodicidad" className="block mt-5">
						Perodicidad*
					</label>
					<select
						id="periodicidad"
						{...register("frequency",  { required: true })}
						className="px-4 py-2 w-[289px] border-2 rounded-lg block border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
					>
						<option value="">Elige una opción</option> //  con esto se muestra vacio para que el usuario no asuma preseleccionado
						<option value="Semanalmente">Semanalmente</option>
						<option value="Quincenalmente">Quincenalmente</option>
						<option value="Mensualmente">Mensualmente</option>
						<option value="Anualmente">Anualmente</option>
					</select>
					<div className="flex justify-center gap-2 pb-6">
								<button
									onClick={() => setEditOpenModal(false)}
									className="font-semibold  justify-center hover:bg-primary ease-out duration-300 mt-16 w-32 bg-transparent border-2 border-primary text-primary gap-3 items-center flex hover:text-white  px-1 py-1"
								>
									Cancelar
								</button>

								<button type='submit' className="font-semibold  justify-center hover:bg-[#427d61] ease-out duration-300 mt-16 w-32 bg-primary gap-3 items-center flex text-white  px-1 py-2 ">
									Guardar
								</button>								
						</div>
				</form>
      </div>
    </article>
  )
}
