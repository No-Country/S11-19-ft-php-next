import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import ProfilePicture from '@/assets/Ellipse-315.png'
import Link from 'next/link'
export default function Page() {
  return (
    <section className='h-screen '>
      <Header/>
      <h2 className='text-marron-oscuro font-semibold  p-6 pl-8 lg:pl-16 text-lg'>Mi Perfil</h2>
      <div className='bg-[#BBEEE580] text-lg h-2/3 flex mx-9 lg:mx-32 rounded-xl flex-col justify-evenly items-center'>
        <Image src={ProfilePicture} className='w-52' alt='avatar' />
        <p>Sandra Pacheco</p>
        <p>Sandra@gmail.com</p>
        <Link className='text-base p-3 px-6 rounded-md bg-primary text-slate-100' href={'/profile/edit-profile'}>
          Editar el perfil
        </Link>
      </div>
    </section>
  )
}
