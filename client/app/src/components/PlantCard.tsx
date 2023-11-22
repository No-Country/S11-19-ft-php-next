import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

import PlantDraw from "../assets/PlantDraw.jpg";

import { useRouter } from "next/navigation";
interface PlantCardProps {
	PlantName: string;
	PlantImg: string;
	PlantInfo: string;
	PlantDate: string;
	PlantAmbient: string;
	PlantLight: string;
	PlantId: number;
	onDelete: () => void;
}

function PlantCard({
	PlantName,
	PlantImg,
	PlantInfo,
	PlantDate,
	PlantAmbient,
	PlantLight,
	PlantId,
	onDelete,
}: PlantCardProps) {
	let plantSrc = PlantImg ? PlantImg : PlantDraw;
	const router = useRouter();
	return (
		<div className="bg-white flex flex-col w-[85%] min-w-[17.3em] md:min-w-[17.5em] h-auto md:w-[290px] md:h-auto border-0.5 border-black drop-shadow-lg ">
				<div className="w-full h-auto overflow-hidden flex flex-row justify-center items-center">
					<Image
							src={plantSrc}
							alt={`Imagen de una ${PlantName}`}
							className=" w-full h-auto aspect-square"
					/>
		</div>
		{/* <div className="bg-white flex flex-col w-[290px] h-[410px] border-0.5 border-black drop-shadow-lg ">
			<div className="w-[290px] h-[200px] overflow-hidden">
				<Image
					src={plantSrc}
					alt={`Imagen de una${PlantName}`}
					width={290}
					height={160}
					className="object-cover object-center h-full w-full"
				/>
			</div> */}
			<div className="flex flex-col mr-1 md:mx-2 text-lg mt-3 justify-between  ml-[10%] md:ml-7 ">
				<div className="flex justify-end text-2xl text-primary  ">
					<BiTrash
						onClick={onDelete}
						className="hover:text-secondary cursor-pointer ease-in-out duration-300"
					></BiTrash>
					<Link href={`/plants/${PlantId}`}>
						<BiEdit className="hover:text-secondary cursor-pointer ease-in-out duration-300"></BiEdit>
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

				{/* Crear  tags dinamicos */}
				<div className="text-base font-semibold mb-4 text-gray-700 mt-10 flex gap-2">
					<>
						<p className="rounded-2xl px-4 py-1 w-fit bg-marron-claro">
							#{PlantAmbient}
						</p>
						<p className="rounded-2xl px-4 py-1 w-fit bg-marron-claro">
							#{PlantLight}
						</p>
					</>
				</div>
			</div>
		</div>
	);
}

export default PlantCard;
