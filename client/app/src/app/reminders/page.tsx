import React from 'react'
import Header from '@/components/header'
import TableContainer from './tableContainer'
import Link from 'next/link'
import ShareButtons from './shareButtons'
export default function RemindersContainer() {
  return (
    <main>
      <Header/>
      <div className='flex p-6 pl-8 w-screen justify-between'>
        <h2 className='text-marron-oscuro font-semibold   lg:pl-16 text-xl'>Recordatorios</h2>
        <ShareButtons/>
      </div>
      <section> 
        <h3 className='pl-8 text-lg my-9'>Hoy</h3>  
        <TableContainer/>
        <h3 className='pl-8 text-lg my-9'>Esta semana</h3>  
        <TableContainer/>
        
      </section>
      <div className='flex justify-center items-center mt-28'>
        <Link className='p-3 bg-secondary text-slate-100 rounded-md' href={'/reminders'}>
          Agregar Recordatorio
          <svg xmlns="http://www.w3.org/2000/svg" className='inline' width="26" height="24" viewBox="0 0 26 24" fill="none">
            <path d="M13.2344 6V12M13.2344 12V18M13.2344 12H19.4639M13.2344 12H7.00488" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
      </div>
    </main>
  )
}
