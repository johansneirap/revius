import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  ArrowRightIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import { Button, Checkbox, Divider, Input, Link } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import FacebookButton from '@/components/login/facebook-btn'
import GoogleButton from '@/components/login/google-btn'
import reviusLogo from '../../public/img/logos/revius-banner.svg'

const Register = () => {
  return (
    <>
      <Head>
        <title>Registro Revius.cl</title>
        <meta
          name="description"
          content="Inicia tu camino siendo parte de la comunidad de Reviuers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid md:grid-cols-2 grid-rows-0 gap-0 h-screen">
        <aside className="hidden md:flex bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600"></aside>
        <aside className="h-full p-6 flex flex-col justify-between">
          <header className="flex text-lg font-semibold text-primary-500">
            <Link href="/" className="flex items-end gap-1">
              <Image src={reviusLogo} alt="revius logo" />
              <span className="font-bold text-primary-500 leading-none text-xl">
                REVIUS
              </span>
            </Link>
          </header>
          <div className=" w-full flex justify-center items-center">
            <div className="items-start flex-col p-0 md:p-12">
              <p className="text-2xl text-center md:text-left">
                Regístrate en Revius
              </p>
              <p className="font-light text-sm md:text-medium text-center md:text-left text-slate-500 my-3">
                Por favor ingresa los detalles para tu registro en la app
              </p>
              <div className="flex flex-col py-4 gap-3">
                <GoogleButton
                  onClick={() => signIn('google', { callbackUrl: '/' })}
                />
                <FacebookButton
                  onClick={() => signIn('facebook', { callbackUrl: '/' })}
                />
                {/* <p className="font-light text-sm md:text-md text-slate-500">
                  O si prefieres:
                </p> */}
              </div>
              <div className="flex justify-between">
                <Divider className="max-w-[45%] mt-3" />
                <p className="font-light text-slate-400">o</p>
                <Divider className="max-w-[45%] mt-3" />
              </div>
              <form action="" className="flex flex-col gap-4 py-4 w-full">
                <Input
                  endContent={
                    <UserIcon
                      width="1em"
                      className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    />
                  }
                  label="Nombre completo"
                  labelPlacement="outside"
                  placeholder="Ingresa tu nombre completo"
                  variant="bordered"
                  color="primary"
                  radius="sm"
                />
                <Input
                  endContent={
                    <EnvelopeIcon
                      width="1em"
                      className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    />
                  }
                  label="Correo electrónico"
                  labelPlacement="outside"
                  placeholder="Ingresa tu correo electrónico"
                  variant="bordered"
                  color="primary"
                  radius="sm"
                />
                <Input
                  endContent={
                    <LockClosedIcon
                      width="1em"
                      className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    />
                  }
                  label="Contraseña"
                  labelPlacement="outside"
                  placeholder="****"
                  type="password"
                  variant="bordered"
                  color="primary"
                  radius="sm"
                />
                <div className="flex flex-col w-full md:py-2 md:px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: 'text-xs md:text-small',
                    }}
                    radius="sm"
                  >
                    Acepto los términos y condiciones de acceso
                  </Checkbox>
                </div>
                <Button
                  color="primary"
                  className="text-sm md:text-medium text-center text-white rounded-md pl-7 lg:px-10 lg:py-5"
                  endContent={
                    <ArrowRightIcon height={16} className="absolute right-4" />
                  }
                >
                  Continuar
                </Button>
              </form>

              <div className="flex py-2 px-1 justify-center gap-2 text-xs md:text-sm">
                <p className="text-xs md:text-sm font-light text-slate-500">
                  ¿Ya tienes una cuenta?
                </p>
                <Link
                  color="primary"
                  href="/login"
                  size="sm"
                  className="text-xs md:text-sm"
                >
                  Inicia sesión
                </Link>
              </div>
            </div>
          </div>
          <footer>
            <p className="text-center md:text-left font-light text-xs md:text-sm text-slate-500">
              © 2023 REVIUS. Todos los derechos reservados.
            </p>
          </footer>
        </aside>
      </div>
    </>
  )
}

export default Register
