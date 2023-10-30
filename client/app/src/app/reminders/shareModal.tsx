import React from 'react'

export default function ShareModal({setOpenModal}) {
  const copyOnTheClipBoard = async  () => {
    try {
      await navigator.clipboard.writeText('dfmsfmdsñflsdm')
      console.log('se ha copiado');
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <article className='fixed w-screen flex justify-center items-center h-screen top-0 left-0 bg-black bg-opacity-40'>
      <div className='px-2 bg-background rounded-md text-primary'>
        <h3 className='text-secondary text-lg my-3 text-center'>Compartir recordatorios</h3>
        <p className='font-semibold text-xs pl-1'>Link Público</p> 
        <p className='border border-primary my-2 py-2 pl-5 pr-14 rounded-md text-sm'>
        wisegarden.com/hfdeicxzdas 
        </p>
        <div className='flex justify-between my-4'>
          <button onClick={() => setOpenModal(false)} className='p-2 border mr-2 w-1/2 border-primary rounded-md bg-transparent text-primary'>
            Cancelar
          </button>
          <button onClick={copyOnTheClipBoard} className='p-2 border ml-2 w-1/2 border-primary bg-primary text-slate-100 rounded-md'>Copiar Link</button>
        </div>
      </div>
    </article>
  )
}
