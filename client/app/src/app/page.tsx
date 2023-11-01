import Image from "next/image";
import Header from "@/components/header";
import CarouselContainer from "@/components/carousel";
import headerPicture from '@/assets/Rectangle-5677.png'
import addPlantPicture from '@/assets/Pebble-People-Plant-3.png'
import remindersPicture from '@/assets/Allura-Clock.png'
import calendarPicture from '@/assets/Hands-Calendar.png'
import landingSectionPicture from '@/assets/landing-second.png'
import firstAvatarCommentPic from '@/assets/Ellipse-313.png'
import secondAvatarCommentPic from '@/assets/Ellipse-315.png'
import thirdAvatarCommentPic from '@/assets/Ellipse-314.png'
export default function Home() {
	return (
		<main className="min-h-screen bg-slate-100">
			<Header />
			<div className="flex flex-col md:flex-row-reverse md:items-center lg:justify-between">
			
				<Image src={headerPicture} className="w-full h-60 md:w-1/2 lg:w-2/5 lg:h-full bg-slate-200 " alt="header" />
				<p className="mx-7 mt-6 md:mt-0 lg:w-1/3 lg:mx-32 lg:text-xl text-primary text-sm">
					<strong>Garden Wise </strong>
					 es la app de <strong>cuidado de plantas</strong>  que revolucionó la forma en que
					las personas cuidan y mantienen sus <strong>plantas</strong> 
				</p>
			</div>
			<div className="mt-7 ">
				<h2 className="text-lg text-center text-secondary font-bold lg:my-14 lg:text-xl mb-4">Funciones</h2>
				<CarouselContainer>
					<div className=" flex text-primary border-2 border-solid rounded-lg border-secondary  flex-col justify-center items-center p-2 w-52 h-56 lg:w-72 lg:h-80 ">
						<Image className="mt-3 w-20 h-20 lg:w-24 lg:h-24" src={addPlantPicture} alt="agregar-planta" />
						<h4 className="my-3 text-primary">Agregar Planta</h4>
						<p className="text-center text-xs lg:text-sm">
						Registra y guarda información específica de una nueva planta en tu colección
						</p>
					</div>
					<div className=" flex text-primary border-2 border-solid rounded-lg border-secondary  flex-col justify-center items-center p-2 w-52 h-56 lg:w-72 lg:h-80">
						<Image className="mt-3 w-20 h-20 lg:w-24 lg:h-24" src={remindersPicture} alt="Recordatorio" />
						<h4 className="my-3">Recordatorio</h4>
						<p className="text-center text-xs lg:text-sm">
						Envía notificaciones y recordatorios personalizados basados en las 
						necesidades de cada planta
						</p>
					</div>
					<div className=" flex text-primary border-2 border-solid rounded-lg border-secondary  flex-col justify-center items-center p-2 w-52 h-56 lg:w-72 lg:h-80">
						<Image className="mt-3 w-20 h-20 lg:w-24 lg:h-24" src={calendarPicture} alt="Calendario" />
						<h4 className="my-3">Calendario</h4>
						<p className="text-center text-xs lg:text-sm">
						Muestra tareas programadas y recordatorios de todos los cuidados mensuales
						</p>
					</div>
				</CarouselContainer>
				<h3 className="flex text-lg lg:text-xl text-secondary mt-7 mb-4 lg:my-14 font-bold justify-center ">
					Beneficios
				</h3>
				<div className="flex flex-col md:flex-row md:items-center md:justify-around md:mb-10">

					<Image src={landingSectionPicture} className="w-full md:w-1/2 lg:w-2/5 lg:h-full h-60 bg-slate-200 " alt="header" />
					<ul className="flex flex-col ml-7 mt-5 text-sm xl:text-xl justify-between xl:space-y-8 text-primary mb-7 gap-5">
					
						<li>
						<svg xmlns="http://www.w3.org/2000/svg" className="inline mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none">
  						<path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#61B78E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
							Mejora la salud de tus plantas
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#61B78E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Optimiza tu tiempo
							</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#61B78E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							No requiere conocimientos previos
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#61B78E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Organiza los cuidados eficientemente
							</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#61B78E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Es muy intuitiva y fácil de usar
							</li>
					</ul>
				</div>
				<h3 className="text-lg lg:my-14 lg:text-xl text-center text-secondary mb-4  font-bold ">
					Nuestros usuarios <br /> nos recomiendan
				</h3>
				<CarouselContainer>
					<div className="bg-secondary text-slate-50 flex rounded-lg flex-col justify-center items-center p-2 w-52 h-52 lg:w-60 lg:h-60">
						<Image className="mt-3 w-20 h-20" src={firstAvatarCommentPic} alt="agregar-planta" />
						<h4 className="my-3">Eduardo Gómez</h4>
						<p className="text-center text-xs ">
						¡Esta aplicación ha transformado mi habilidad para cuidar mis plantas!
						</p>
					</div>
					<div className="bg-secondary text-slate-50 flex rounded-lg flex-col justify-center items-center p-2 w-52 h-52 lg:w-60 lg:h-60">
						<Image className="mt-3 w-20 h-20"  src={secondAvatarCommentPic} alt="agregar-planta" />
						<h4 className="my-3">Susana Díaz</h4>
						<p className="text-center text-xs ">
						La aplicación es muy intuitiva, incluso para alguien sin experiencia
						</p>
					</div>
					<div className="bg-secondary text-slate-50 flex rounded-lg flex-col justify-center items-center p-2 w-52 h-52 lg:w-60 lg:h-60">
						<Image className="mt-3 w-20 h-20" src={thirdAvatarCommentPic} alt="agregar-planta" />
						<h4 className="my-3">Pablo Casas</h4>
						<p className="text-center text-xs ">
						Nunca más he tenido plantas marchitas. Me encanta esta app
						</p>
					</div>
					
				</CarouselContainer>
			</div>
			<footer className="mt-5 bg-background flex flex-col items-center justify-center">
				<h4 className="text-secondary my-5">Contactanos</h4>
				<div className="mt-5 mb-10">
					<svg className="inline mr-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
						<rect width="40" height="40" rx="20" fill="#61B78E"/>
						<path d="M27.7852 25.7812L28.6719 20H23.125V16.25C23.125 14.668 23.8984 13.125 26.3828 13.125H28.9062V8.20312C28.9062 8.20312 26.6172 7.8125 24.4297 7.8125C19.8594 7.8125 16.875 10.582 16.875 15.5938V20H11.7969V25.7812H16.875V39.7578C17.8945 39.918 18.9375 40 20 40C21.0625 40 22.1055 39.918 23.125 39.7578V25.7812H27.7852Z" fill="white"/>
					</svg>
					<svg className="inline mr-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
							<rect width="40" height="40" rx="20" fill="#61B78E"/>
							<path d="M20.0035 10.163C23.21 10.163 23.5864 10.1773 24.8537 10.2345C26.0258 10.2869 26.6595 10.4823 27.0835 10.649C27.6457 10.8682 28.0459 11.1255 28.4652 11.5447C28.8844 11.964 29.1465 12.3642 29.3609 12.9264C29.5229 13.3504 29.723 13.9841 29.7754 15.1562C29.8326 16.4235 29.8469 16.7999 29.8469 20.0064C29.8469 23.2128 29.8326 23.5892 29.7754 24.8565C29.723 26.0286 29.5276 26.6623 29.3609 27.0863C29.1417 27.6485 28.8844 28.0487 28.4652 28.468C28.0459 28.8872 27.6457 29.1493 27.0835 29.3637C26.6595 29.5257 26.0258 29.7258 24.8537 29.7782C23.5864 29.8354 23.21 29.8497 20.0035 29.8497C16.7971 29.8497 16.4207 29.8354 15.1534 29.7782C13.9813 29.7258 13.3476 29.5304 12.9236 29.3637C12.3614 29.1445 11.9612 28.8872 11.5419 28.468C11.1227 28.0487 10.8606 27.6485 10.6462 27.0863C10.4842 26.6623 10.2841 26.0286 10.2317 24.8565C10.1745 23.5892 10.1602 23.2128 10.1602 20.0064C10.1602 16.7999 10.1745 16.4235 10.2317 15.1562C10.2841 13.9841 10.4795 13.3504 10.6462 12.9264C10.8654 12.3642 11.1227 11.964 11.5419 11.5447C11.9612 11.1255 12.3614 10.8634 12.9236 10.649C13.3476 10.487 13.9813 10.2869 15.1534 10.2345C16.4207 10.1726 16.8019 10.163 20.0035 10.163ZM20.0035 8C16.7447 8 16.3349 8.01429 15.0533 8.07147C13.7764 8.12864 12.9046 8.33351 12.1422 8.6289C11.3513 8.93383 10.6843 9.34833 10.0173 10.0154C9.35029 10.6824 8.94055 11.3542 8.63086 12.1403C8.33546 12.9026 8.13059 13.7745 8.07342 15.0561C8.01625 16.333 8.00195 16.7427 8.00195 20.0016C8.00195 23.2605 8.01625 23.6702 8.07342 24.9518C8.13059 26.2287 8.33546 27.1006 8.63086 27.8677C8.93578 28.6585 9.35029 29.3256 10.0173 29.9926C10.6843 30.6596 11.3561 31.0693 12.1422 31.379C12.9046 31.6744 13.7764 31.8793 15.0581 31.9365C16.3397 31.9936 16.7447 32.0079 20.0083 32.0079C23.2719 32.0079 23.6769 31.9936 24.9586 31.9365C26.2354 31.8793 27.1073 31.6744 27.8744 31.379C28.6653 31.0741 29.3323 30.6596 29.9993 29.9926C30.6663 29.3256 31.0761 28.6538 31.3858 27.8677C31.6812 27.1053 31.886 26.2335 31.9432 24.9518C32.0004 23.6702 32.0147 23.2652 32.0147 20.0016C32.0147 16.738 32.0004 16.333 31.9432 15.0513C31.886 13.7745 31.6812 12.9026 31.3858 12.1355C31.0808 11.3446 30.6663 10.6776 29.9993 10.0106C29.3323 9.34357 28.6605 8.93383 27.8744 8.62414C27.1121 8.32875 26.2402 8.12388 24.9586 8.0667C23.6722 8.01429 23.2624 8 20.0035 8Z" fill="white"/>
							<path d="M20.0031 13.8408C16.6013 13.8408 13.8379 16.5994 13.8379 20.006C13.8379 23.4125 16.5965 26.1711 20.0031 26.1711C23.4096 26.1711 26.1682 23.4125 26.1682 20.006C26.1682 16.5994 23.4096 13.8408 20.0031 13.8408ZM20.0031 24.0033C17.7924 24.0033 16.0009 22.2119 16.0009 20.0012C16.0009 17.7905 17.7924 15.9991 20.0031 15.9991C22.2137 15.9991 24.0052 17.7905 24.0052 20.0012C24.0052 22.2119 22.2137 24.0033 20.0031 24.0033Z" fill="white"/>
							<path d="M26.4115 15.032C27.2062 15.032 27.8504 14.3878 27.8504 13.5932C27.8504 12.7985 27.2062 12.1543 26.4115 12.1543C25.6169 12.1543 24.9727 12.7985 24.9727 13.5932C24.9727 14.3878 25.6169 15.032 26.4115 15.032Z" fill="white"/>
					</svg>
					<svg className="inline mr-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
						<rect width="40" height="40" rx="20" fill="#61B78E"/>
						<path d="M29.7032 10.8237C27.9186 9.97958 26.0048 9.35768 24.0039 9.00149C23.9674 8.99462 23.931 9.0118 23.9123 9.04616C23.6661 9.4974 23.3935 10.0861 23.2026 10.5488C21.0505 10.2167 18.9094 10.2167 16.8014 10.5488C16.6104 10.0758 16.3279 9.4974 16.0807 9.04616C16.0619 9.01295 16.0255 8.99577 15.9891 9.00149C13.9892 9.35654 12.0755 9.97844 10.2898 10.8237C10.2743 10.8306 10.261 10.842 10.2523 10.8569C6.62229 16.4471 5.62789 21.9 6.11571 27.2852C6.11792 27.3116 6.13226 27.3368 6.15213 27.3528C8.54708 29.1658 10.867 30.2664 13.1438 30.996C13.1803 31.0075 13.2189 30.9937 13.2421 30.9628C13.7806 30.2046 14.2607 29.4052 14.6724 28.5645C14.6967 28.5153 14.6735 28.4569 14.6238 28.4374C13.8623 28.1396 13.1372 27.7765 12.4397 27.3642C12.3845 27.331 12.3801 27.2497 12.4309 27.2107C12.5776 27.0974 12.7245 26.9794 12.8646 26.8603C12.89 26.8385 12.9253 26.8339 12.9551 26.8477C17.5375 29.0043 22.4985 29.0043 27.0268 26.8477C27.0566 26.8328 27.0919 26.8374 27.1184 26.8591C27.2586 26.9783 27.4054 27.0974 27.5533 27.2107C27.604 27.2497 27.6007 27.331 27.5455 27.3642C26.848 27.7845 26.1229 28.1396 25.3603 28.4362C25.3106 28.4557 25.2885 28.5153 25.3128 28.5645C25.7333 29.404 26.2134 30.2034 26.742 30.9616C26.7641 30.9937 26.8038 31.0075 26.8403 30.996C29.1282 30.2664 31.4481 29.1658 33.843 27.3528C33.864 27.3368 33.8772 27.3127 33.8794 27.2864C34.4633 21.0604 32.9016 15.6523 29.7396 10.858C29.7319 10.842 29.7186 10.8306 29.7032 10.8237ZM15.3567 24.0062C13.9771 24.0062 12.8403 22.7005 12.8403 21.0971C12.8403 19.4937 13.955 18.188 15.3567 18.188C16.7694 18.188 17.8951 19.5051 17.873 21.0971C17.873 22.7005 16.7583 24.0062 15.3567 24.0062ZM24.6605 24.0062C23.281 24.0062 22.1442 22.7005 22.1442 21.0971C22.1442 19.4937 23.2589 18.188 24.6605 18.188C26.0732 18.188 27.199 19.5051 27.1769 21.0971C27.1769 22.7005 26.0732 24.0062 24.6605 24.0062Z" fill="white"/>
					</svg>
				</div>
			</footer>
		</main>
	);
}
// Falta el footer
