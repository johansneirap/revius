import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import {
  Button,
  // Checkbox,
  Input,
  // Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import React from 'react'

const RegisterModal = ({ isOpen, onOpenChange }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="auto"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <p>
                ¡Estás a un paso de ser un
                <span className="text-primary-500"> Reviuer</span>! 🎉
              </p>
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                endContent={
                  <UserIcon
                    width="1em"
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                label="Nombre"
                placeholder="Ingresa tu nombre"
                variant="bordered"
                color="primary"
              />
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
                color="primary"
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
                color="primary"
              />
              <Input
                endContent={
                  <LockClosedIcon
                    width="1em"
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                label="Confirma tu contraseña"
                placeholder="****"
                type="password"
                variant="bordered"
                color="primary"
                description="La contraseña debe tener entre 8 y 12 caracteres"
              />
              {/* <div className="flex py-2 px-1 justify-between">
                <Checkbox
                  classNames={{
                    label: 'text-small',
                  }}
                >
                  Mantener sesión iniciada
                </Checkbox>
                <Link color="primary" href="#" size="sm">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div> */}
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onPress={onClose}
                className="text-lg font-medium text-center text-white bg-primary-500 rounded-md px-7 lg:px-10 lg:py-5 "
              >
                Registrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default RegisterModal
