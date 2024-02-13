/** @format */

import { Roboto, Rubik, Poppins } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import Header from '../ui/Header'
import ObserverTop from '@globals/ObserverTop'
import Footer from '../ui/Footer'
import ContactForm from '@molecules/ContactForm'
import { useGenerals } from '@context/generals.context'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-rubik',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
})

export const Layout: FC<PropsWithChildren> = ({ children }: any) => {
  const { multilanguage } = useGenerals()

  return (
    <div className={`${roboto.variable} ${rubik.variable} ${poppins.variable}`}>
      {/* <CustomHead /> */}
      <ObserverTop />
      <Header />
      <ContactForm
        form={multilanguage.contact_form}
        title={multilanguage.contact_form.title}
      />
      {children}
      <Footer />
    </div>
  )
}
