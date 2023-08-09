import Head from 'next/head'
import Hero from './Hero'
import Navbar from './Navbar'
import SectionTitle from './sectionTitle'

import { benefitOne, benefitTwo } from './Data'
// import Video from './Video'
import Benefits from './Benefits'
import Footer from './Footer'
// import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
// import Faq from './Faq'
// import PopupWidget from './popupWidget'

const Landing = () => {
  return (
    <>
      <Head>
        <title>Revius - La comunidad de reviewers </title>
        <meta
          name="description"
          content="Revius es una aplicación gratuita para encontrar/entregar valoraciones de productos totalmente transparente"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Qué ofrece Revius"
        title="¿Por qué deberías usar revius?"
      >
        ¿Alguna vez quisiste comprar algún producto y pasaste horas buscando
        comentarios del producto en internet? Este es el lugar para acceder a
        valoraciones de productos de manera totalmente transparente y
        desinteresada.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}
      {/* <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq /> */}
      <CallToAction />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  )
}

export default Landing
