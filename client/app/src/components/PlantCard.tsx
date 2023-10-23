import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
interface PlantCardProps {
	PlantName: string;
	PlantImg: string;
	PlantInfo: string;
	PlantDate: string;
}

function PlantCard({
	PlantName,
	PlantImg,
	PlantInfo,
	PlantDate,
}: PlantCardProps) {
	return (
		<div className="bg-white flex flex-col w-[290px] h-[410px] border-0.5 border-black drop-shadow-lg ">
			<div className="w-[290px] h-[200px] overflow-hidden">
				<Image
					src={PlantImg}
					alt={PlantName}
					width={290}
					height={160}
					className="object-cover object-center h-full w-full"
				/>
			</div>
			<div className="flex flex-col mx-2 text-lg mt-3 justify-between ml-7 ">
				<div className="flex justify-end text-2xl text-primary  ">
					<Link href="">
						<BiTrash className="hover:text-secondary ease-in-out duration-300">
							{" "}
						</BiTrash>
					</Link>
					<Link href="">
						<BiEdit className="hover:text-secondary ease-in-out duration-300"></BiEdit>
					</Link>
				</div>
				<h3 className="text-gray-800 font-medium">{PlantName}</h3>
				<ul className="text-sm mt-3">
					<li className="flex gap-1">
						<h2 className="font-bold">Fecha de adquisición: </h2>
						<p> {PlantDate}</p>
					</li>
					<li className="flex flex-wrap">
						<h3 className="font-bold">Observaciones:</h3>
						<p className="flex flex-wrap">
							{PlantInfo ? (
								PlantInfo
							) : (
								<span className="text-gray-500">
									Ninguna observación agregada.
								</span>
							)}
						</p>
					</li>
				</ul>

				{/* Contenedor de tags */}
				<div className="text-base font-semibold mb-4 text-gray-700 mt-10 flex gap-2">
					<>
						<p className="rounded-2xl px-4 py-1 w-fit bg-marron-claro">
							#interior
						</p>
						<p className="rounded-2xl px-4 py-1 w-fit bg-marron-claro">
							#exterior
						</p>
					</>
				</div>
			</div>
		</div>
	);
}

export default PlantCard;
