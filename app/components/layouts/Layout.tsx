import { Roboto,Rubik } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import InfoHeader from '../ui/InfoHeader'


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

export const Layout: FC<PropsWithChildren> = ({ menu, children }: any) => {
  return (
    <div className={`${roboto.variable} ${rubik.variable}`}>
      {/* <CustomHead /> */}
      <InfoHeader />
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}
