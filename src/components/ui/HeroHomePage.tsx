import React from 'react'
import  Container  from '../landing/Container'
import { Input } from '@nextui-org/react'

export const HeroHomePage = () => {
  return (
      <div className='flex justify-center items-center h-80 bg-gradient-to-r from-blue-500 to-blue-300'>
        <div className='grid gap-6'>
          <h1 className='font-montserrat  text-center'>Mira reseñas por gente como tú. Elige sabiamente </h1>
          <Input size='lg' type='search' placeholder='¿Qué producto tienes en mente?'/>
        </div>
      </div>

  )
}
