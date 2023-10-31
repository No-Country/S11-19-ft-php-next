"use client";
import PlantCard from "@/components/PlantCard";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";
import React, { useContext } from "react";
import CarouselPlants from "@/components/carrouselPlants";
import Header from "@/components/header";
import Link from "next/link";
import { AuthContext } from "@/components/authcontext";

function Plants() {

	const { userState } = useContext(AuthContext);
	console.log("userState en Layout plants: ", userState);
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
								PlantInfo=""
								PlantDate="11/02/2022"
								PlantName="Rosa"
							/>
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
