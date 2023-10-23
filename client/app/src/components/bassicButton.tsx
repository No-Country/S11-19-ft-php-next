import React from 'react'

export default function Button({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className='rounded-lg text-gray-950 w-2/3 bg-slate-100 '>
      {children}
    </button>
  )
}
