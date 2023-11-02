"use client"
import React, { useContext, useEffect, useState } from 'react'
import Header from '@/components/header'
import { AuthContext } from '@/components/authcontext';
import Link from 'next/link';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
/* type User = {
	name:string,
	email:string,
	img:string,
	token:string,
	id:number
} */
export default function Page() {

	const { userState } = useContext(AuthContext);
	const router = useRouter()
  /* const [user, setUser] = useState<User | null>(null)
  useEffect ( () => {
		const retrieveUser = (): User | null | undefined => {
			if ( typeof window !== undefined) {
				const userData = localStorage.getItem("garden-wise-user");
				// si no existe rdireccionar, aunque seria amejor redireccionar en el layout para evitar flash
				// pasar el token a un state, para que con un useEffect hacer la peticion con el token como dependencia
				return userData ? JSON.parse(userData) as User : null;
			}}
		const getUser = retrieveUser()
		if (!getUser?.token) {
			redirect("/login")
		} else {
			
			setUser(getUser)
		};
	},[]) */
	if (!userState.token) {
    router.push("/login")
	}
	
  return (
    <section className='h-screen '>
      <Header/>
      <h2 className='text-marron-oscuro font-semibold  p-6 pl-8 lg:pl-16 text-lg'>Mi Perfil</h2>
      <div className='bg-[#BBEEE580] text-lg h-2/3 flex mx-9 lg:mx-32 rounded-xl flex-col justify-evenly items-center'>
          {userState?.img ? (
          <Image src={userState?.img} width={100} height={100} alt="avatar"/>					
          ): (
          <p className="bg-background rounded-full w-36 h-36 p-2 pl-3 pt-10 text-7xl text-center font-semibold text-marron-oscuro">{userState?.name?.slice(0,1)}</p>
          )}
        <p>{userState?.name}</p>
        <p>{userState?.email}</p>
        <Link className='text-base p-3 px-6 rounded-md bg-primary text-slate-100' href={'/profile/edit-profile'}>
          Editar el perfil
        </Link>
      </div>
    </section>
  )
}
