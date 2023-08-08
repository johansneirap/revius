import Image from 'next/image'
import backgroundImage from '../../public/img/login-background.svg'
import { Button, Link } from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import ReviusLogo from '@/components/ui/icons/ReviusLogo'
const LoginBackground = () => {
  return (
    <Image
      src={backgroundImage}
      alt="background page"
      className="h-screen absolute -z-10 blur-sm sm:blur-lg scale-105"
    />
  )
}

const LoginForm = () => {
  return (
    <div className="flex flex-col bg-white p-10 px-12 border-2 border-slate-800 rounded-sm shadow-2xl gap-6 self-center lg:w-[30vw]">
      <picture className="flex justify-center border-2 border-slate-800 shadow-md rounded-full p-4 self-center bg-gradient-to-br from-blue-700 to-blue-500">
        <ReviusLogo height="80" width="80" />
      </picture>
      <h1 className="text-slate-700 font-bold text-xl">
        Inicia sesión en Revius
      </h1>
      <Input
        type="email"
        label="Email"
        variant="bordered"
        radius="sm"
        description="Nunca compartiremos tu email con nadie más"
        isClearable
      ></Input>
      <Input
        type="password"
        label="Password"
        variant="bordered"
        radius="sm"
        description="Al menos 8 caracteres"
      ></Input>
      <div className="flex flex-col justify-center items-center gap-1">
        <Button className="w-full bg-gradient-to-br from-blue-700 to-blue-500 hover:bg-blue-900 font-sans text-white rounded-sm py-2 px-4 mt-4">
          Inicia Sesión
        </Button>
        <div className="flex flex-col items-center sm:flex-row gap-0 sm:gap-1">
          <span className="text-center text-sm text-slate-700 flex flex-col items-center sm:flex-row sm:gap-1 ">
            ¿Aun no tienes cuenta?
          </span>
          <Link href="/register" className="text-blue-500">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Login() {
  return (
    <main className="flex justify-center align-middle h-screen w-screen overflow-hidden relative">
      <LoginBackground />
      <section className="gap-10 flex h-screen">
        <LoginForm />
      </section>
    </main>
  )
}

export default Login
