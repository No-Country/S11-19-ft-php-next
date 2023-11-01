"use client";
import { ReactElement, useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "@/components/authcontext";

type User = {
	name:string,
	email:string,
	img:string,
	token:string,
	id:number
}

const Layout = ({ children }: { children: ReactElement }) => {
	const { userState } = useContext(AuthContext);
	console.log("userState en Layout plants: ", userState);
	/* if (!userState.token) {
		console.log("redirecciona");
		redirect("/login")
	} */

	useEffect ( () => {
		const retrieveUser = (): User | null | undefined => {
			if ( typeof window !== undefined) {
				const userData = localStorage.getItem("garden-wise-user");
				// si no existe rdireccionar, aunque seria amejor redireccionar en el layout para evitar flash
				// pasar el token a un state, para que con un useEffect hacer la peticion con el token como dependencia
				return userData ? JSON.parse(userData) as User : null;
			}}
		const isLogged = retrieveUser()
		console.log("isLogged: ", isLogged)
		if (!isLogged?.token) {
			redirect("/login")
		} else console.info("logged");
	},[])
	return (
		<>
			<div>{children}</div>
		</>
	);
};
export default Layout;
