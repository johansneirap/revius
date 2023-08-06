import Image from 'next/image'
import backgroundImage from '../../public/img/login-background.svg'
import Link from 'next/link'
const LoginBackground = () => {
  return (
    <Image
      src={backgroundImage}
      alt="background page"
      className="min-h-screen min-w-screen absolute -z-10"
    />
  )
}

export function Login() {
  return (
    <main className="flex justify-center align-middle">
      <LoginBackground />
      <section className="min-w- max-w-7xl gap-10 p-16 mt-4 flex h-screen">
        {/* <div>
          <h1 className="text-4xl font-bold text-center text-slate-900">
            Login
          </h1>
        </div> */}
        <div className="flex flex-col bg-white p-10 px-12 border rounded-sm shadow-md gap-6 self-center">
          <h1 className="text-slate-700 font-bold text-2x">
            Inicia sesión en Revius
          </h1>
          <form action="" className="flex flex-col gap-6 w-80">
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input type="text" className="border rounded-sm py-1 px-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input type="password" className="border rounded-sm py-1 px-2" />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <button
                type="submit"
                className="w-full bg-blue-600 font-sans text-white rounded-sm py-2 px-4 mt-4"
              >
                Inicia sesión
              </button>
              <span className="text-center text-sm text-slate-700">
                ¿Aun no tienes cuenta?{' '}
                <Link href="/register" className="text-blue-500 font-bold">
                  Regístrate
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
