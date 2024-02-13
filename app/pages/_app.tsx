import 'swiper/css'
import { Layout } from '@/components/layouts'
import '@/styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ControllerState, GeneralsProvider } from '@context/generals.context'
import { NavbarProvider } from '@context/navbar.context'
import { Favicon } from '@globals/Favicon'

interface CustomPageProps {
  generals: ControllerState
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  return (
    <>
      <Head>
        <title>JAJ Construction</title>
        <Favicon />
      </Head>

      <GeneralsProvider generals={pageProps.generals}>
        <NavbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavbarProvider>
      </GeneralsProvider>
    </>
  )
}
