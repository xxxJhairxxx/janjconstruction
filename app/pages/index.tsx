/** @format */

import { Contact, ContactData } from '@/interfaces/contact'
import { Home, HomeData } from '@/interfaces/home'
import { baseApi } from '@/lib/baseApi'
import { getGenerals } from '@/lib/getGenerals'
import ContactForm from '@molecules/ContactForm'
import HomeBanner from '@organisms/HomeBanner'
import HomeCompany from '@organisms/HomeCompany'
import HomeMiddle from '@organisms/HomeMiddle'
import HomeWeWord from '@organisms/HomeProjects'
import HomeServices from '@organisms/HomeServices'
import { GetStaticProps } from 'next'

interface HomeProps {
  home: HomeData
  contact: ContactData
}

const Index = ({ home, contact }: HomeProps) => {
  return (
    <main>
      <ContactForm title={contact.title} form={contact.form} />

      <HomeBanner
        title={home.home_banner.title}
        subtitle={home.home_banner.subtitle}
        img_mobile={home.home_banner.img_mobile}
        img_tablet={home.home_banner.img_tablet}
        img_laptop={home.home_banner.img_laptop}
      />
      <HomeCompany
        title={home.home_our_company.title}
        subtitle={home.home_our_company.subtitle}
        text={home.home_our_company.text}
        img={home.home_our_company.image}
      />
      <HomeServices
        title={home.home_our_services.title}
        subtitle={home.home_our_services.subtitle}
        text={home.home_our_services.text}
        img={home.home_our_services.image}
      />
      <HomeMiddle title={home.home_middle.title} img={home.home_middle.image} />
      <HomeWeWord
        title={home.home_we_work.title}
        subtitle={home.home_we_work.subtitle}
        text={home.home_we_work.text}
      />
    </main>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: home }, { data: contact }] = await Promise.all([
    baseApi.get<Home>(`/home?locale=en&populate=deep`),
    baseApi.get<Contact>(`/contact?locale=en&populate=deep`),
  ])

  return {
    props: {
      home: home.data,
      contact: contact.data,
      generals,
    },
    revalidate: 1,
  }
}
