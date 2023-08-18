import { HeroHomePage } from '@/components/ui/HeroHomePage'
import NavBar from '@/components/ui/NavBar'
import Head from 'next/head'

export default function Home() {
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
        {/* <section className="max-w-[1280px] px-6 m-auto mt-4"> */}
          <HeroHomePage/>
        {/* </section> */}
      </main>
    </>
  )
}
