import { HeroHomePage } from '@/components/ui/HeroHomePage'
import NavBar from '@/components/ui/NavBar'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
export default function Home() {
  const { data: session } = useSession()
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
          <HeroHomePage/>
        <section className="max-w-[1280px] px-6 m-auto mt-4">
          <h1>Home Page</h1>
          {session ? (
            <>
              Signed in as {session?.user?.email} <br />
              Access token {session?.user?.accessToken} <br />
              Avatar {session?.user?.image} <br />
            </>
          ) : (
            <> Not signed in</>
          )}
        </section>
      </main>
    </>
  )
}
