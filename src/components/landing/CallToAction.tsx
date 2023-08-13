import React from 'react'
import { Button, useDisclosure } from '@nextui-org/react'
import Container from './Container'
import RegisterModal from '../modals/RegisterModal'

const CallToAction = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <Container>
      <RegisterModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-primary-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            ¿Listo para ser parte de Revius?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            El acceso es totalmente gratuito, no esperes más.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
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
  )
}

export default CallToAction
