'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const [isLogged, setIsLogged] = useState(false)
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
			<nav ref={menuRef}  className={`fixed  bg-slate-100 transition-transform duration-500 text-navbar text-xl text-center h-screen z-50 w-52 ${isOpen ? 'translate-x-0': '-translate-x-full'}`}>
				<ul>
					
					<li className="my-10"><Link href={'/'}>Mis Plantas</Link></li>
					<li className="my-10"><Link href={'/'}>Calendario</Link></li>
					<li className="my-10"><Link href={'/'}>Recordatorio</Link></li>
					<li className="my-10"><Link href={'/'}>Notificaciones</Link></li>
					<li className="my-10"><Link href={'/'}>Mi perfil</Link></li>
				</ul>
			</nav>
			<div className="flex justify-between items-center h-20 bg-button-primary">
			{isLogged ? (
				<>
					<button id="hamburgerMenu" onClick={openTheMenu}>

						<i className="ml-2">ham</i>
					</button>
					<Image className="ml-2" src={""} alt="Brand" />
					<Image src={''} alt="avatar"/>					
				</>
			) : (
				<>
					<Image className="ml-2" src={""} alt="Brand" />

					<div className="text-sm mr-3">
						<Link className="mr-7 text-slate-100 text-xs" href={"/"}>
							Registrarme
						</Link>
						<Link
							className="p-2 bg-text text-xs text-slate-100 rounded-xl"
							href={"/"}
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
