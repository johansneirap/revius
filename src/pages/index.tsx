import NavBar from '@/components/ui/NavBar'
import Head from 'next/head'
import { useEffect } from 'react'
interface User {
  firstName: string
  lastName: string
  email: string
}
interface SessionUser {
  user: User
  accesstoken: string
}
interface Props {
  user: string | null
}
export default function Home({ user = null }: Props) {
  const sessionUser: SessionUser = JSON.parse(user ?? '{}')
  // TODO: this should be refactored to a hook like "useSession"
  //? possible refactor to use next-auth
  useEffect(() => {
    if (!sessionUser) return
    localStorage.setItem('revius-auth-user', JSON.stringify(sessionUser.user))
    localStorage.setItem(
      'revius-auth-accesstoken',
      JSON.stringify(sessionUser.accesstoken)
    )
  }, [sessionUser])
  return (
    <>
      <Head>
        <title>Revius</title>
        <meta name="description" content="REVIUS - Inicio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="w-full flex-row relative no-wrap">
        <section className="max-w-[1280px] px-6 m-auto mt-4">
          <h1>Home Page</h1>
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      user: context.req.cookies['revius-auth-user'] ?? null,
    },
  }
}
