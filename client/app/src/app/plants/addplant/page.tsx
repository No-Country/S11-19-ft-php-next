import React from "react";
import Header from "@/components/header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
function AddPlant() {
	return (
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

						<h2 className="text-3xl mr-24 mt-5   font-medium">
							Agregar Planta
						</h2>
					</div>
				</div>
				<form action="" className="flex flex-col items-center">
					<div className="flex flex-col gap-1">
						<label htmlFor="nombre">Nombre*</label>
						<input
							type="name"
							required
							id="nombre"
							className="px-4 py-3 w-[289px] border-2 rounded-lg border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							name="nombre"
							placeholder="Ej. Margarita"
						/>
						<label htmlFor="nombre">Ambiente*</label>
						<input
							type=""
							required
							id="nombre"
							className="px-4 py-3 w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							name="nombre"
							placeholder="Ej. Margarita"
						/>
						<label htmlFor="nombre">Cantidad de Luz*</label>
						<input
							type=""
							required
							id="nombre"
							className="px-4 py-3 w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							name="nombre"
							placeholder="Ej. Margarita"
						/>
						<label htmlFor="nombre">Fecha de adquisición</label>
						<input
							type="date"
							required
							id="nombre"
							className="px-4 py-3 w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							name="nombre"
							placeholder="Ej. Margarita"
						/>
						<label htmlFor="nombre">Observaciones</label>
						<input
							type="text"
							required
							id="nombre"
							className="px-4 py-3 w-[289px] border-2 rounded-lg  border-zinc-500 focus:outline-none focus:border-[#2DD4BF]"
							name="nombre"
							placeholder="Ej: Cambia de color"
						/>
					</div>
					<p className="text-xs font-medium mt-3">
						<span className="font-bold"> Nota:</span> Los inputs marcados con *
						son obligatorios
					</p>
				</form>
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
			</div>
		</section>
	);
}

export default AddPlant;
