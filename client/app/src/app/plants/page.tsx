"use client";
import PlantCard from "@/components/PlantCard";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";
import React from "react";
import CarouselPlants from "@/components/carrouselPlants";
import Header from "@/components/header";

function Plants() {
	return (
		<section className="bg-background  min-h-screen">
			<Header />
			<div className="flex flex-col items-center">
				<div className="flex items-baseline mb-16">
					<h2 className="text-3xl mr-24 mt-5 text-marron-oscuro font-medium">
						Mis Plantas{" "}
					</h2>
					<div className="flex gap-2 text-2xl">
						<HiOutlineDownload />
						<HiOutlineShare />
					</div>
				</div>
				<div className=" w-full 2xl:w-full -ml-2 mx-auto">
					<CarouselPlants>
						<PlantCard
							PlantImg="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1930"
							PlantInfo="planta de el living comprada en adad "
							PlantDate="11/02/2022"
							PlantName="Orquidia"
						/>
						<PlantCard
							PlantImg="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1930"
							PlantInfo="planta de el living comprada en adad "
							PlantDate="11/02/2022"
							PlantName="Flor"
						/>
						<PlantCard
							PlantImg="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1930"
							PlantInfo=" "
							PlantDate="11/02/2022"
							PlantName="Rosa"
						/>
						<PlantCard
							PlantImg="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1930"
							PlantInfo="planta de el living comprada en adad "
							PlantDate="11/02/2022"
							PlantName="Orquidia"
						/>
						<PlantCard
							PlantImg="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1930"
							PlantInfo="planta de el living comprada en adad "
							PlantDate="11/02/2022"
							PlantName="Orquidia"
						/>
					</CarouselPlants>
				</div>

				<button className="mt-16 w-44 bg-secondary gap-1 items-center flex text-white  px-4 py-2">
					Agregar Planta
					<BsPlusLg size="20px" />
				</button>
			</div>
		</section>
	);
}

export default Plants;