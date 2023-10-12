import Image from "next/image";
import Header from "@/components/header";
import CarouselContainer from "@/components/carousel";
export default function Home() {
	
	return (
		<main className="min-h-screen ">
			<Header/>
			<div className="mt-7">
				<h2 className="text-lg text-center mb-4">Funciones</h2>
				<CarouselContainer>
					<div className="bg-background flex flex-col justify-center items-center p-2 w-52 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
						<Image className="mt-3 w-20 h-20" src={''} alt="agregar-planta"/>
						<h4 className="my-3">Agregar Planta</h4>
						<p className="text-center text-sm ">Duis aute irure dolor in reprehenderit in voluptate velit</p>
					</div>
					<div className="bg-background flex flex-col justify-center items-center p-2 w-52 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
						<Image className="mt-3 w-20 h-20" src={''} alt="Recordatorio"/>
						<h4 className="my-3">Recordatorio</h4>
						<p className="text-center text-sm ">Duis aute irure dolor in reprehenderit in voluptate velit</p>
					</div>
					<div className="bg-background flex flex-col justify-center items-center p-2 w-52 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
						<Image className="mt-3 w-20 h-20" src={''} alt="Calendario"/>
						<h4 className="my-3">Calendario</h4>
						<p className="text-center text-sm ">Duis aute irure dolor in reprehenderit in voluptate velit</p>
					</div>
				</CarouselContainer>
			</div>
		</main>
	);
}
