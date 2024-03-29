import Landing from '@/components/landing/Landing'
import Head from 'next/head'
import 'atropos/css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Revius</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}
