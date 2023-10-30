'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Brand from "./brand";
import profilePicture from '@/assets/Ellipse-313.png'
const Header = () => {
	const [isLogged, setIsLogged] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef(null)
	
	// document.addEventListener('click', function(event) {
	// 	if(isOpen && event.target !== menuRef.current){
	// 		setIsOpen(false)
	// 		console.log('isOpenFalse');
	// 	}
	// })
	useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
	const openTheMenu = () => {
		setIsOpen(true)
		console.log('isOpenTrue');
	}
	return (
		<header >
			<div className="flex justify-between items-center h-20 px-3 bg-primary">
			{isLogged ? (
				<>
					<button id="hamburgerMenu" className="p-3 border-solid border lg:hidden border-slate-100 rounded-lg" onClick={openTheMenu}>

					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M0 3H20V5H0V3ZM0 9H20V11H0V9ZM0 15H20V17H0V15Z" fill="white"/>
					</svg>
					</button>
					<Brand/>
					<nav ref={menuRef}  className={`fixed top-0 left-0 lg:static  lg:h-full lg:text-base lg:bg-transparent lg:w-1/2 lg:text-slate-100 bg-slate-100 transition-transform duration-500 text-primary text-xl text-center h-screen  z-50 w-52 ${isOpen ? 'translate-x-0': '-translate-x-full lg:-translate-x-0'}`}>
						<ul className="lg:flex justify-between items-center lg:h-full">
							
							<li className="my-10 lg:my-0"><Link href={'/plants'}>Mis Plantas</Link></li>
							<li className="my-10 lg:my-0"><Link href={'/'}>Calendario</Link></li>
							<li className="my-10 lg:my-0"><Link href={'/'}>Recordatorio</Link></li>
							<li className="my-10 lg:hidden"><Link href={'/'}>Notificaciones</Link></li>
							<li className="my-10 lg:hidden"><Link href={'/profile'}>Mi perfil</Link></li>
						</ul>
					</nav>
					<div className="flex justify-between text-slate-100 space-x-5 items-center">
						<Link href={''}>

							<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M15 17H20L18.595 15.595C18.4063 15.4063 18.2567 15.1822 18.1546 14.9357C18.0525 14.6891 18 14.4249 18 14.158V11C18.0002 9.75894 17.6156 8.54834 16.8992 7.53489C16.1829 6.52144 15.17 5.75496 14 5.341V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5V5.341C7.67 6.165 6 8.388 6 11V14.159C6 14.697 5.786 15.214 5.405 15.595L4 17H9M15 17H9M15 17V18C15 18.7956 14.6839 19.5587 14.1213 20.1213C13.5587 20.6839 12.7956 21 12 21C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V17" stroke="#FFF4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</Link>
						<p className="hidden lg:block">Alan Lopez</p>
						<Link href={'/profile'}>
							<Image src={profilePicture} width={50} height={50} alt="avatar"/>					
						</Link>
					</div>
				</>
			) : (
				<>
					<Brand/>
					<div className="text-sm mr-3">
						<Link className="mr-7 text-slate-100" href={"/register"}>
							Registrarme
						</Link>
						<Link
							className="p-2 bg-secondary text-slate-100 rounded-xl"
							href={"/login"}
						>
							Iniciar Sesión
						</Link>
					</div>
				
				</>
			)}
			</div>
		</header>
	);
};

export default Header;
