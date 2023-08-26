import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { Button, Checkbox, Divider, Input, Link } from '@nextui-org/react'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import FacebookButton from '@/components/login/facebook-btn'
import GoogleButton from '@/components/login/google-btn'
import reviusLogo from '../../public/img/logos/revius-banner.svg'
import Head from 'next/head'
const Login = () => {
  return (
    <>
      <Head>
        <title>Revius Login</title>
        <meta name="description" content="Inicia sesión en Revius" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid md:grid-cols-2 grid-rows-0 gap-0 h-screen">
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
                Inicio de sesión
              </p>
              <p className="font-light text-sm md:text-medium text-center md:text-left text-slate-500 my-3">
                Bienvenido otra vez! Porfavor ingresa tus credenciales.
              </p>
              <form action="" className="flex flex-col gap-4 py-4 w-full">
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
                <div className="flex w-full md:py-2 md:px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: 'text-xs md:text-small',
                    }}
                    radius="sm"
                  >
                    Mantener sesión iniciada
                  </Checkbox>
                  <Link
                    color="primary"
                    href="/recuperar"
                    className="text-xs md:text-sm"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Button
                  color="primary"
                  className="text-sm md:text-medium text-center text-white rounded-md px-7 lg:px-10 lg:py-5"
                >
                  Iniciar
                </Button>
              </form>
              <Divider />
              <div className="flex flex-col py-4 gap-3">
                <p className="font-light text-sm md:text-md text-slate-500">
                  O si prefieres:
                </p>
                <GoogleButton onClick={() => signIn('google')} />
                <FacebookButton onClick={() => signIn('facebook')} />
              </div>
              <div className="flex py-2 px-1 justify-center gap-2 text-xs md:text-sm">
                <p className="text-xs md:text-sm font-light text-slate-500">
                  ¿Aun no estás registrado?
                </p>
                <Link
                  color="primary"
                  href="/registro"
                  size="sm"
                  className="text-xs md:text-sm"
                >
                  Regístrate aquí
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
        <aside className="hidden md:flex bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600"></aside>
      </div>
    </>
  )
}
export default Login
