import React from 'react'

export default function Specialization({Icon, title, paragraph, projects}) {
  return (
    <div className='flex justify-between border rounded-2xl md:w-3/4 mb-2.5 hover:border-green-400 hover:text-green-400 ease-in duration-300'>
        <div className='m-12'>
            <h1 className='text-2xl font-light mb-2'>{title}</h1>
            <p className='text-base text-zinc-500 mb-7'>{paragraph}</p>
            <p className='text-white'>{projects}</p>
        </div>
        <div className='m-12'>
            <Icon className="text-3xl text-green-400" />
        </div>
    </div>
  )
}
