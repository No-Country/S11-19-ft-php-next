"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Header from "@/components/header";
import { redirect } from "next/navigation";
import axios from "axios";

type User = {
	name:string,
	email:string,
	img:string,
	token:string,
	id:number | null
}
const initialState = {
	name:"",
	email:"",
	img:"",
	token:"",
	id:null
}

function AddPlant() {

	const { register, handleSubmit, reset } = useForm();
	const [user, setUser] = useState<any>()
	useEffect ( () => {
		const retrieveUser = (): User | null | undefined => {
			if ( typeof window !== undefined) {
				const userData = localStorage.getItem("garden-wise-user");
				userData && setUser(JSON.parse(userData))
				return userData ? JSON.parse(userData) as User : null;
			}}
		const isLogged = retrieveUser()
		console.log("isLogged: ", isLogged)
		if (!isLogged?.token) {
			redirect("/login")
		} else console.info("not logged");
	},[])


	useEffect( ()=>  {
		// trae las plantas del user
		if (user) {
			const options = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization":`Bearer ${user.token}`
				}
	
			};
			fetch("https://garden-wise-app.fly.dev/api/plants/", options)
			.then(res => res.json())
			.then(data => console.log("data get plants",data))
			.catch((err) => console.log(err))
		} else console.log("FALLA")
	},[user])

	const onSubmit = async (data:any) => {

					const bodyData = {
						name:data.nombre,
						environment_id:data.ambiente,
						light_id:data.luz,
						date:data.fechaAdquisicion,
						description:data.observaciones,
						image:"https://xxxxx",
						user_id:user.id
					}

					const options = {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization":`Bearer ${user.token}`
						},
						body: JSON.stringify(bodyData),
					};
					console.log(data);
          const URL = "https://garden-wise-app.fly.dev/api/plants/create"
					try {
						const response = await fetch(URL, options); 
            const data = await response.json()

						if (response.status === 200) {
							console.log("Post");
							console.log("response", data);
							reset();
							redirect("/plants");
						} else {
							console.error("Error en la solicitud:", response.statusText);
						}
					} catch (error) {
						console.error("Error", error);
					}
				}

	return (

		<>
			<Header></Header>
			<section
				
				className="bg-background flex flex-col items-center  min-h-screen"
			>
				<div className="flex flex-col ">
					<div className="flex  mb-16">
						<div className="flex items-baseline gap-1 text-marron-oscuro">
							<Link
								href="/plants"
								className="hover:opacity-50 ease-in-out transition duration-300"
							>
								<AiOutlineArrowLeft size="20px" />
							</Link>

							<h2 className="text-2xl mr-24 mt-5   font-medium">
								Agregar Planta
							</h2>
						</div>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col items-center">
						<div className="flex flex-col gap-1">
							<label htmlFor="nombre">Nombre*</label>
							<input
								type="name"
								{...register("nombre")}
								required
								id="nombre"
								className="px-4 py-3 w-[289px] border-2 rounded-lg border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
								placeholder="Ej. Margarita"
							/>
							<label htmlFor="ambiente" className="">
								Ambiente*
							</label>
							<select
								id="ambiente"
								{...register("ambiente")}
								name="ambiente"
								required
								className="px-4 py-3 w-[289px] border-2 rounded-lg border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							>
								<option value={1}> Interior</option>
								<option value={2}> Exterior</option>
							</select>
							<label htmlFor="luz">Cantidad de luz*</label>
							<select
								id="luz"
								required
								{...register("luz")}
								className="px-4 py-3 w-[289px] border-2 rounded-lg border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							>
								<option value={1}> Directa</option>
								<option value={2}> Indirecta</option>
								<option value={3}> Sombra</option>
							</select>

							<label htmlFor="fecha-adquisicion">Fecha de adquisición</label>
							<input
								type="date"
								{...register("fechaAdquisicion")}
								required
								id="fechaAdquisicion"
								className="px-4 py-3 w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
								placeholder="Ej. Margarita"
							/>
							<label htmlFor="observaciones">Observaciones</label>
							<input
								type="text"
								{...register("observaciones")}
								className="px-4 py-3 w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
								placeholder="Ej: Cambia de color"
							/>
						</div>
						<p className="text-xs font-medium mt-3">
							<span className="font-bold"> Nota:</span> Los inputs marcados con
							* son obligatorios
						</p>
						<label htmlFor="file" className="font-bold mt-3">
							Foto
						</label>
						<input
							type="file"
							{...register("file")}
							id="file"
							className=" w-[289px]  bg-gray-400 h-[189px] flex items-center  border-2 rounded-xl   focus:outline-none focus:border-[#2DD4BF]"
							name="file"
							placeholder="Ej: Cambia de color"
						/>
						<div className="flex justify-center gap-2">
							<Link
								href="/plants"
								className="font-semibold  justify-center hover:bg-primary ease-out duration-300 mt-16 w-32 bg-transparent border-2 border-primary text-primary gap-3 items-center flex hover:text-white  px-1 py-1"
							>
								Cancelar
							</Link>

							<button className="font-semibold  justify-center hover:bg-[#427d61] ease-out duration-300 mt-16 w-32 bg-primary gap-3 items-center flex text-white  px-1 py-2">
								Guardar
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default AddPlant;
