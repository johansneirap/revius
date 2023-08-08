import Image from 'next/image'
import backgroundImage from '../../public/img/login-background.svg'
import Link from 'next/link'
import reviusLogo from '../../public/revius-logo.svg'

const LoginBackground = () => {
  return (
    <Image
      src={backgroundImage}
      alt="background page"
      className="h-screen absolute -z-10 blur-md sm:blur-lg scale-105"
    />
  )
}

export function Login() {
  return (
    <main className="flex justify-center align-middle h-screen w-screen overflow-hidden relative">
      <LoginBackground />
      <section className="gap-10 flex h-screen">
        {/* <div>
          <h1 className="text-4xl font-bold text-center text-slate-900">
            Login
          </h1>
        </div> */}
        <div className="flex flex-col bg-white p-10 px-12 border-2 border-slate-800 rounded-sm shadow-2xl gap-6 self-center lg:w-[30vw]">
          <picture className="flex justify-center border-2 border-slate-800 shadow-md rounded-full p-4 self-center bg-gradient-to-br from-blue-700 to-blue-500">
            <Image src={reviusLogo} alt="" height={80} />
          </picture>
          <h1 className="text-slate-700 font-bold text-2x">
            Inicia sesión en Revius
          </h1>
          <form action="" className="flex flex-col gap-6 ">
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input type="text" className="border rounded-sm py-1 px-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input type="password" className="border rounded-sm py-1 px-2" />
            </div>
            <div className="flex flex-col justify-center align-middle gap-1">
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-blue-700 to-blue-500 hover:bg-blue-900 font-sans text-white rounded-sm py-2 px-4 mt-4"
              >
                Inicia sesión
              </button>
              <div className="flex flex-col items-center sm:flex-row gap-0 sm:gap-1">
                <span className="text-center text-sm text-slate-700 flex flex-col items-center sm:flex-row sm:gap-1 ">
                  ¿Aun no tienes cuenta?
                </span>
                <Link href="/register" className="text-blue-500 font-bold">
                  Regístrate
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
