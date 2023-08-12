import Landing from '@/components/landing/Landing'
import Head from 'next/head'
import React from 'react'

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Revius</title>
        <meta
          name="description"
          content="Revius.cl - La comunidad que te ayuda a tomar mejores decisiones de compra"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}

export default LandingPage
