import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </NextUIProvider>
  )
}

export default App
