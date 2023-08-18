import React from 'react'
import { Input } from '@nextui-org/react'

export const HeroHomePage = () => {
  return (
      <div className='flex justify-center items-center h-80 bg-gradient-to-r from-blue-500 to-blue-300 md:flex-col md:items-center'>
        <div className='grid gap-6 '>
          <h1 className='font-montserrat text-center text-xl'>Mira reseñas por gente como tú. Elige sabiamente 👀</h1>
          <Input className='w-10/12 md:w-full mx-auto' size='lg' type='search' placeholder='¿Qué producto tienes en mente?'/>
        </div>
      </div>

  )
}
