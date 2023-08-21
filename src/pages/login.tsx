import { Card } from '@nextui-org/react'
import FacebookButton from '@/components/login/facebook-btn'
import GoogleButton from '@/components/login/google-btn'

const Login = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="fb-root">
      <Card className="items-center flex-col p-12 gap-4">
        <p className="text-2xl">Inicia sesión</p>
        <br />
        <FacebookButton />
        <GoogleButton />
      </Card>
    </section>
  )
}

export default Login
