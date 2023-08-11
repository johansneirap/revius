import {
    EnvelopeIcon,
    LockClosedIcon,
    UserIcon,
  } from '@heroicons/react/24/solid'
  import {
    Button,
    Checkbox,
    // Checkbox,
    Input,
    // Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const LoginModal = () => {
  return (
    <Modal 
    isOpen
    //  onOpenChange={onOpenChange} 
    placement="auto">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            Iniciar Sesión
          </ModalHeader>
          <ModalBody>
            <Input
              endContent={
                <EnvelopeIcon
                  width="1em"
                  className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                />
              }
              label="Correo electrónico"
              placeholder="Ingresa tu correo electrónico"
              variant="bordered"
            />
            <Input
              endContent={
                <LockClosedIcon
                  width="1em"
                  className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                />
              }
              label="Contraseña"
              placeholder="****"
              type="password"
              variant="bordered"
            />
            <div className="flex py-2 px-1 justify-between">
              <Checkbox
                classNames={{
                  label: 'text-small',
                }}
              >
                Mantener sesión iniciada
              </Checkbox>
              <Link color="primary" href="#" style={{fontSize:'12px'}}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onPress={onClose}
              className="text-lg font-medium text-center text-white bg-indigo-600 rounded-md px-7 lg:px-10 lg:py-5 "
            >
              Iniciar Sesión
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default LoginModal;