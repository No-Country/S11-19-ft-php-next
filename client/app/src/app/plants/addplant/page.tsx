"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Header from "@/components/header";
import { redirect } from "next/navigation";
function AddPlant() {
	const { register, handleSubmit, reset } = useForm();
	return (
		<>
			<Header></Header>
			<section
				onSubmit={handleSubmit(async (data) => {
					// const formData = {
					// 	nombre: data.nombre,
					// 	ambiente: data.ambiente,
					// 	luz: data.luz,
					// 	observaciones: data.observaciones,
					// };

					const options = {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					};
					console.log(data);

					try {
						const response = await fetch("URL", options); // Reemplaza "URL_DE_TU_API" con la URL de tu API

						if (response.status === 200) {
							console.log("Post");
							reset();
							redirect("/plants");
						} else {
							console.error("Error en la solicitud:", response.statusText);
						}
					} catch (error) {
						console.error("Error", error);
					}
				})}
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
					<form action="" className="flex flex-col items-center">
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
								<option value="interior"> Interior</option>
								<option value="exterior"> Exterior</option>
							</select>
							<label htmlFor="luz">Cantidad de luz*</label>
							<select
								id="luz"
								required
								{...register("luz")}
								className="px-4 py-3 w-[289px] border-2 rounded-lg border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							>
								<option value="directa"> Directa</option>
								<option value="indirecta"> Indirecta</option>
								<option value="sombra"> Sombra</option>
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
