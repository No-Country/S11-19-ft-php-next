"use client";
import PlantCard from "@/components/PlantCard";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";
import React, { useContext, useEffect, useState } from "react";
import CarouselPlants from "@/components/carrouselPlants";
import Header from "@/components/header";
import Link from "next/link";
import { AuthContext } from "@/components/authcontext";
import axiosInstance from "@/services/axiosInstance";
import axios from "axios";
import { useRouter } from "next/navigation";

function Plants() {
	const { userState,  logOutUser} = useContext(AuthContext);
	const router = useRouter()
	const [plants, setPlants] = useState<Plant[]>([]);

	interface Plant {
		id: number;
		imageUrl: string;
		description: string;
		date: string;
		name: string;
		ambient: string;
		light: string;
	}

	useEffect(() => {
		axiosInstance
			.get("/plants/")
			.then((response) => {
				console.log(response.data.data);
				setPlants(response.data.data);
			})
			.catch((error) => {
				console.error("Error al obtener datos de plantas:", error);
			});
    /* if ( userState?.token ) {
			axios.get("https://garden-wise-app.fly.dev/api/plants/", 
				{
					headers: {
					"Content-Type": "application/json",
					"Authorization":`Bearer ${userState.token}`
				}
			})
		.then( response => {
			console.log("RESPUESTA.DATA",response.data.data)
			setPlants(response.data.data)
		}) 
		.catch( err => {
			console.log("ERROR",err.response.data.message)
			if (err.response.data.message === "Unauthenticated") {
				logOutUser()
        router.push("/login")
			}
		})  */// Unauthenticated

	}, []);

	console.log(plants);
	return (
		<>
			<Header></Header>
			<section className="bg-background mx-5 xl:mx-24  min-h-screen">
				<div className=" flex flex-col items-center ">
					<div className="flex items-baseline mb-16">
						<h2 className="text-3xl mr-24 mt-5 text-marron-oscuro font-medium">
							Mis Plantas
						</h2>
						<div className="flex gap-2 text-2xl">
							<HiOutlineDownload />
							<HiOutlineShare />
						</div>
					</div>
					<div className=" w-full 2xl:w-full  mx-auto">
						<CarouselPlants>
							{plants.map((plant) => (
								<PlantCard
									key={plant.id}
									PlantImg={plant.imageUrl}
									PlantInfo={plant.description}
									PlantDate={plant.date}
									PlantName={plant.name}
									PlantAmbient={plant.ambient}
									PlantLight={plant.light}
								/>
							))}
						</CarouselPlants>
					</div>

					<Link
						href="/plants/addplant"
						className="font-semibold justify-center hover:bg-[#427d61] ease-out duration-300 mt-16 w-44 bg-secondary gap-3 items-center flex text-white  px-1 py-2"
					>
						Agregar Planta
						<BsPlusLg size="20px" />
					</Link>
				</div>
			</section>
		</>
	);
}

export default Plants;
