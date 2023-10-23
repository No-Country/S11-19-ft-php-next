"use client"
import { ReactElement, useContext } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "@/components/authcontext";




const Layout = ({ children }: { children: ReactElement }) => {
	const {userState, dispatchUser} =useContext(AuthContext)
	console.log("userState en Layout",userState)
	if(!userState.token) {
		console.log("redirecciona")
		redirect("/login")
	}
	return (
		<>
			<div>{children}</div>
		</>
	);
};
export default Layout;
