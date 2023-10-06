import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const RegisterModal = ({ isOpen, onOpenChange }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      size="5xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {/* <p>
                ¡Estás a un paso de ser un
                <span className="text-primary-500"> Reviuer</span>! 🎉
              </p> */}
            </ModalHeader>
            <ModalBody>
              <div className="grid gap-6 items-center">
                <div className="flex flex-col justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-lg font-bold tracking-tighter sm:text-2xl xl:text-6xl/none">
                      No esperes más para ser un{' '}
                      <span className="text-lg font-bold tracking-tighter sm:text-2xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                        Reviuer
                      </span>
                    </h1>
                    <p className="max-w-[600px] text-zinc-500 text-sm sm:text-sm md:text-lg dark:text-zinc-100 mx-auto">
                      Únete a nosotros y toma el control de tus decisiones de
                      compra. Rápido, seguro y diseñado para la vida moderna.
                    </p>
                  </div>
                  <div className="w-full max-w-sm space-y-2 mx-auto">
                    <form className="flex space-x-2">
                      <Input
                        className="max-w-lg flex-1 border-gray-900"
                        placeholder="Ingresa tu email"
                        type="email"
                        radius="sm"
                      />
                      <Button
                        className="bg-primary text-white"
                        radius="sm"
                        type="submit"
                        onPress={onClose}
                      >
                        Participar
                      </Button>
                    </form>
                    <p className="text-xs text-zinc-500 dark:text-zinc-100">
                      Prepárate para reinventar tu forma de tomar decisiones de
                      compra.
                    </p>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Link
                className="underline underline-offset-2 text-black text-xs"
                href="/terms"
              >
                Términos y Condiciones
              </Link>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default RegisterModal
