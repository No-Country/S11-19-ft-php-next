"use client";
import PlantCard from "@/components/PlantCard";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";
import React from "react";
import CarouselPlants from "@/components/carrouselPlants";

function Plants() {
	return (
		<section>
			<div className="flex flex-col items-center">
				<div className="flex items-baseline">
					<h2 className="text-3xl font-bold">Mis Plantas </h2>
					<div className="flex text-xl">
						<HiOutlineDownload />
						<HiOutlineShare />
					</div>
				</div>
				<div className=" w-full 2xl:w-full -ml-2 mx-auto">
					<CarouselPlants>
						<PlantCard PlantImg="" PlantName="Planta1" />
						<PlantCard PlantImg="" PlantName="Planta2" />
						<PlantCard PlantImg="" PlantName="Planta3" />
						<PlantCard PlantImg="" PlantName="Planta4" />
						<PlantCard PlantImg="" PlantName="Planta5" />
						<PlantCard PlantImg="" PlantName="Planta6" />
						<PlantCard PlantImg="" PlantName="Planta7" />
					</CarouselPlants>
				</div>

				<button className="mt-16 w-44 bg-button-primary gap-1 items-center flex text-white  px-4 py-2">
					Agregar Planta
					<BsPlusLg size="20px" />
				</button>
			</div>
		</section>
	);
}

export default Plants;
