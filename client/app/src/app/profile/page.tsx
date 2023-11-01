"use client"
import React, { useContext, useEffect } from 'react'
import Header from '@/components/header'
import { AuthContext } from '@/components/authcontext';
export default function Page() {

	const { userState } = useContext(AuthContext);
	/* useEffect( () => {
		console.log("userState en profile: ", userState);
	},[userState]) */
	let token:string;
	if (typeof window !== 'undefined') {
		// Tu lógica de localStorage aquí
		const localStorageData = window.localStorage.getItem("garden-wise-user")
		if (localStorageData) {
			token = JSON.parse(localStorageData)
		  console.log("token en profile: ",token)
	  }
	} else console.log("no token")
  return (
    <div>
      <Header/>
    </div>
  )
}
