"use client"
import React, { useContext, useEffect } from 'react'
import Header from '@/components/header'
import { AuthContext } from '@/components/authcontext';
export default function Page() {

	const { userState } = useContext(AuthContext);
	useEffect( () => {
		console.log("userState en profile: ", userState);


	},[userState])
  return (
    <div>
      <Header/>
    </div>
  )
}
