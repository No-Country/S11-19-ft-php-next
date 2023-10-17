import Image from "next/image";
import React from "react";
interface PlantCardProps {
	PlantName: string;
	PlantImg: string;
	PlantInfo: string;
	PlantDate: string;
}
// Faltan props de los datos de cada planta y probablemente una descripcion
function PlantCard({
	PlantName,
	PlantImg,
	PlantInfo,
	PlantDate,
}: PlantCardProps) {
	return (
		<div className="bg-white flex flex-col   w-[290px] h-[410px] border-0.5 border-black drop-shadow-2xl ">
			<div className=" w-[290px] h-[200px] overflow-hidden">
				<Image
					src={PlantImg}
					alt={PlantName}
					width={290}
					height={160}
					className="object-cover object-center h-full w-full"
				/>
			</div>
			<div className="flex flex-col mx-1 text-lg mt-4 ml-7 justify-between">
				<h3 className="text-gray-800">{PlantName}</h3>
				<ul className="text-sm mt-3">
					<li className="flex gap-1">
						<h2 className="font-bold">Fecha de adquisición: </h2>
						<p> {PlantDate} 11/04/2022</p>
					</li>
					<li className="flex flex-wrap">
						<h3 className="font-bold">Observaciones:</h3>
						<p className="flex flex-wrap">{PlantInfo}</p>
					</li>
				</ul>

				{/* crear componente de tags */}
				<div className="text-sm mt-3 flex gap-2">
					<p className="rounded-xl px-1 w-fit bg-gray-300"> #interior </p>
					<p className="rounded-xl px-1 w-fit bg-gray-300"> #exterior </p>
				</div>
			</div>
		</div>
	);
}

export default PlantCard;
