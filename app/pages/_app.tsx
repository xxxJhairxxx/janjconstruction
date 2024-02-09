import 'swiper/css'
import { Layout } from '@/components/layouts'
import '@/styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  //   useEffect(() => {
  //     fetchSitemaps();
  //     fetchRobots();
  //  });

  return (
    <>
      <Head>
        <title>Credit Experts</title>
        {/* <Favicon /> */}
      </Head>
{/* 
      <ArticleProvider resources={pageProps.resources}>
        <GeneralsProvider generals={pageProps.generals}>
          <LanguageProvider>
            <NavbarProvider> */}
              <Layout>
                <Component {...pageProps} />
              </Layout>
            {/* </NavbarProvider>
          </LanguageProvider>
        </GeneralsProvider>
      </ArticleProvider> */}
    </>
  )
}
