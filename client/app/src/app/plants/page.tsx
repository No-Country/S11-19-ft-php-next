import PlantCard from "@/components/PlantCard";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";
import React from "react";

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
				<div className="mt-12">
					<PlantCard PlantImg="" PlantName="Planta" />
				</div>
				<button className="mt-16 bg-button-primary gap-1 items-center flex text-white  px-4 py-2">
					Agregar Planta
					<BsPlusLg size="20px" />
				</button>
			</div>
		</section>
	);
}

export default Plants;
