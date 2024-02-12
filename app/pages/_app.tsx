import 'swiper/css'
import { Layout } from '@/components/layouts'
import '@/styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>J&C Construccion</title>
        {/* <Favicon /> */}
      </Head>
      {/* 
   
        <GeneralsProvider generals={pageProps.generals}>
          <LanguageProvider>
            <NavbarProvider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </NavbarProvider>
          </LanguageProvider>
        </GeneralsProvider>
      */}
    </>
  )
}
