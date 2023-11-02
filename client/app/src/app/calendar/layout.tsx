"use client"
import { Fragment, useState, useContext, useEffect } from 'react'
import { AuthContext } from '@/components/authcontext';
import { useRouter } from 'next/navigation';
const layout = ({children}:any) => {
	const { userState} = useContext(AuthContext);
  const router = useRouter()
  if(!userState?.token) {
		router.push("/login")
	}

	return (
		<>
		  {children}
		</>
	)
}
export default layout
