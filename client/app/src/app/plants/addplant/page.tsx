"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Header from "@/components/header";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { AuthContext } from "@/components/authcontext";


type User = {
	name: string;
	email: string;
	img: string;
	token: string;
	id: number | null;
};
const initialState = {
	name: "",
	email: "",
	img: "",
	token: "",
	id: null,
};

function AddPlant() {
	const { register, handleSubmit, reset } = useForm();
	const [user, setUser] = useState<any>();
	const router = useRouter();
	useEffect(() => {
		const retrieveUser = (): User | null | undefined => {
			if (typeof window !== undefined) {
				console.log("user")
				const userData = localStorage.getItem("garden-wise-user");
				userData && setUser(JSON.parse(userData));
				return userData ? (JSON.parse(userData) as User) : null;
			}
		};
		const isLogged = retrieveUser();
		console.log("isLogged: ", isLogged);
		if (!isLogged?.token) {
			/* redirect("/login"); */
			/* router.push("/login") */
		} else console.info("not logged");
	}, []);
	const { userState } = useContext(AuthContext);

	const onSubmit = async (data: any) => {
		console.log(data.file[0]);
		const formData = new FormData();
		formData.append("image", data.file[0]);
		formData.append("name", data.nombre);
		formData.append("environment_id", data.ambiente);
		formData.append("light_id", data.luz);
		formData.append("date", data.fechaAdquisicion);
		formData.append("description", data.observaciones);
		formData.append("user_id", userState.id);

		const URL = "https://garden-wise-app.fly.dev/api/plants/create";
		try {
			 //if (user) console.log("user: ", user)
			const response = await axios.post(URL, formData, {
				headers: {
					"Content-Type": "multipart/form-data", // Asegúrate de que el encabezado sea correcto
					Authorization: `Bearer ${userState.token}`,
				},
			});

			if (response.status === 200) {
				console.log("Post");
				console.log("response", response.data);
				reset();
				router.push("/plants");
			} else {
				console.error("Error en la solicitud:", response.statusText);
			}
		} catch (error) {
			console.error("Error", error);
		}
	};
	return (
		<>
			<Header></Header>
			<section className="bg-background flex flex-col items-center  min-h-screen">
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
					<form
						onSubmit={handleSubmit(onSubmit)}
						action=""
						className="flex flex-col items-center"
						encType="multipart/form-data"
					>
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
							className="w-[160px] mt-1"
							name="file"
							onChange={(e) => {
								const fileInput = e.target as HTMLInputElement | null;
								if (fileInput) {
									const file = fileInput.files?.[0];
									if (file) {
										const reader = new FileReader();
										reader.onload = (event) => {
											const imgElement = document.getElementById(
												"preview-img"
											) as HTMLImageElement | null;
											if (imgElement) {
												imgElement.src = String(event.target?.result);
											}
										};
										reader.readAsDataURL(file);
									}
								}
							}}
						/>
						<img
							id="preview-img"
							src=""
							alt=""
							className="w-[289px] mt-5 h-[289px] object-cover object-center"
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
