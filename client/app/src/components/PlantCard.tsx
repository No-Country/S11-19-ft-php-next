import Image from "next/image";
import React from "react";
interface PlantCardProps {
	PlantName: string;
	PlantImg: string;
}
// Faltan props de los datos de cada planta y probablemente una descripcion
function PlantCard({ PlantName, PlantImg }: PlantCardProps) {
	return (
		<div className="bg-white flex flex-col border-2 w-[290px]  h-[410px] border-0.5 border-black">
			<Image
				src={PlantImg}
				width={290}
				height={200}
				alt="Picture of the author"
				className="bg-slate-300"
			/>
			<div className="flex flex-col text-lg mt-4 ml-7 justify-between">
				<h3>Nombre Planta {PlantName}</h3>
				<ul className="text-sm mt-3">
					<li>Dato 1 </li>
					<li>Dato 2 </li>
					<li>Dato 3 </li>
					<li>Dato 4</li>
				</ul>

				{/* crear componente de tags */}
				<div className="text-sm mt-6 flex gap-2">
					<p className="rounded-xl px-1 w-fit bg-gray-300"> #interior </p>
					<p className="rounded-xl px-1 w-fit bg-gray-300"> #exterior </p>
				</div>
			</div>
		</div>
	);
}

export default PlantCard;
