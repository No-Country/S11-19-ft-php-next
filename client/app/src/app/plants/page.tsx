"use client";
import PlantCard from "@/components/PlantCard";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "@/components/header";
import Link from "next/link";
import { AuthContext } from "@/components/authcontext";
import axiosInstance from "@/services/axiosInstance";
import axios from "axios";
import { useRouter } from "next/navigation";

import "swiper/css";

import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Plants() {
	const { userState, logOutUser } = useContext(AuthContext);
	const [plants, setPlants] = useState<Plant[]>([]);
	const router = useRouter();
	interface Plant {
		id: number;
		imageUrl: string;
		description: string;
		date: string;
		name: string;
		ambient: string;
		light: string;
	}
	// Lógica para eliminar la planta
	const updatePlants = (deletedPlantId: number) => {
		const updatedPlants = plants.filter((plant) => plant.id !== deletedPlantId);
		setPlants(updatedPlants);
	};
	const handleDeletePlant = async (
		plantId: number,
		plantName: string
	): Promise<void> => {
		const confirmed = confirm(`¿Seguro de eliminar ${plantName}?`);

		if (confirmed) {
			try {
				const res = await axios.delete(
					`https://garden-wise-app.fly.dev/api/plants/delete/${plantId}`,
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${userState.token}`,
						},
					}
				);
				console.log(res);

				if (res.status === 200) {
					updatePlants(plantId);
					console.log(`se elimino ${plantId}`);
				}
			} catch (error) {
				console.error("Error al eliminar la planta:", error);
			}
		}
	};

	useEffect(() => {
		if (userState?.token) {
			axios
				.get("https://garden-wise-app.fly.dev/api/plants/", {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${userState.token}`,
					},
				})
				.then((response) => {
					setPlants(response.data.data);
				})
				.catch((err) => {
					console.log("ERROR en GET: ", err);
				});
		}
	}, []);

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

					<Swiper
						pagination={true}
						modules={[Navigation, Pagination]}
						className="w-full"
						spaceBetween={30}
						breakpoints={{
							340: {
								slidesPerView: 1.2,
								spaceBetween: 15,
							},
							700: {
								slidesPerView: 2.3,
								spaceBetween: 15,
							},
							1000: {
								slidesPerView: 3,
								spaceBetween: 15,
							},
							1500: {
								slidesPerView: 4,
								spaceBetween: 15,
							},
							1800: {
								slidesPerView: 5,
								spaceBetween: 15,
							},
						}}
					>
						{plants.map((plant) => (
							<SwiperSlide className="mb-10" key={plant.id}>
								<PlantCard
									key={plant.id}
									PlantId={plant.id}
									PlantImg={plant.imageUrl}
									PlantInfo={plant.description}
									PlantDate={plant.date}
									PlantName={plant.name}
									PlantAmbient={plant.ambient}
									PlantLight={plant.light}
									onDelete={() => handleDeletePlant(plant.id, plant.name)}
								/>
							</SwiperSlide>
						))}

						{/* <SwiperSlide>
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
						</SwiperSlide> */}
					</Swiper>

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
