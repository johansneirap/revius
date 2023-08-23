import { Card } from '@nextui-org/react'
import FacebookButton from '@/components/login/facebook-btn'
import GoogleButton from '@/components/login/google-btn'
import { signIn, getSession } from 'next-auth/react'

const Login = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="fb-root">
      <Card className="items-center flex-col p-12 gap-4">
        <p className="text-2xl">Inicia sesión</p>
        <br />
        {/* <Button onClick={() => signIn('facebook')}>
          Continua con Facebook
        </Button>
        <Button onClick={() => signIn('google')}> Continua con Google</Button> */}
        <FacebookButton onClick={() => signIn('facebook')} />
        <GoogleButton onClick={() => signIn('google')} />
      </Card>
    </section>
  )
}
export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (session) return { redirect: { destination: '/', permanent: false } }
  return { props: { session } }
}
export default Login
