import React from 'react'
import Image from 'next/image'
import { Button, useDisclosure } from '@nextui-org/react'
import Atropos from 'atropos/react'
import Container from './Container'
import RegisterModal from '../modals/RegisterModal'
import cloudyBg from '../../../public/img/cloudy-bg.svg'

const CallToAction = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <Atropos className="my-atropos" shadow={false} highlight={false}>
      <Container>
        <RegisterModal isOpen={isOpen} onOpenChange={onOpenChange} />
        <div className="flex flex-wrap items-center justify-between max-w-4xl gap-5 mx-auto text-white bg-primary-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl relative overflow-hidden border border-primary-500">
          <Image
            src={cloudyBg}
            alt="aa"
            className="absolute z-0 left-0 -top-26 object-fill"
          />
          <div className="flex-grow text-center lg:text-left z-10">
            <h2 className="text-2xl font-medium lg:text-3xl">
              ¿Listo para ser parte de Revius?
            </h2>
            <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
              El acceso es totalmente gratuito, no esperes más.
            </p>
          </div>
          <div className="flex-shrink-0 w-full text-center lg:w-auto z-10">
            <Button
              onPress={onOpen}
              rel="noopener"
              className="inline-block mx-auto text-lg font-medium text-center text-primary-500 bg-white rounded-md px-7 lg:px-10 "
            >
              Únete a Revius
            </Button>
          </div>
        </div>
      </Container>
    </Atropos>
  )
}

export default CallToAction
