"use client"
import { Fragment, useState, useContext, useEffect } from 'react'
import { AuthContext } from '@/components/authcontext';
const layout = ({children}:any) => {
	const { userState} = useContext(AuthContext);
useEffect( () => {
		console.log("userState en calendar: ", userState)

	},[userState])
	return (
		<>
		  {children}
		</>
	)
}
export default layout
