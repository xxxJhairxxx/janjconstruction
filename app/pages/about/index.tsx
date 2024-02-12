import { About, AboutData } from '@/interfaces/about'
import { Home } from '@/interfaces/home'
import { baseApi } from '@/lib/baseApi'
import { getGenerals } from '@/lib/getGenerals'
import { Title } from '@atoms/Title'
import { Container } from '@globals/Container'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import Markdown from 'react-markdown'

interface AboutProps {
  about: AboutData
}

const About = ({ about }: AboutProps) => {
  return (
    <div className='about'>
      <div className='about-banner'>
        <figure className='about-banner-img'>
          <Image
            width={about.banner_img.width}
            height={about.banner_img.height}
            alt=''
            src={about.banner_img.url}
            className='w-full h-full object-contain'
          />
        </figure>
      </div>
      <section className='about-description-one'>
        <Container className='about-one'>
          <figure className='about-description-one-img'>
            <Image
              width={about.img.width}
              height={about.img.height}
              alt=''
              src={about.img.url}
              className='w-full h-full object-contain'
            />
          </figure>

          <div className='about-description-one-text'>
            <Title subtitle={about.subtitle} title={about.title} />
            <Markdown>{about.description_one}</Markdown>
          </div>
        </Container>
      </section>

      <section className='about-description-two'>
        <Container className='about-two'>
          <div className='about-description-two-text'>
            <Title subtitle={about.subtitle} />
            <Markdown>{about.description_two}</Markdown>
          </div>

          <figure className='about-description-two-img'>
            <Image
              width={about.img2.width}
              height={about.img2.height}
              alt=''
              src={about.img2.url}
              className='w-full h-full object-contain'
            />
          </figure>
        </Container>
      </section>
    </div>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: about }] = await Promise.all([
    baseApi.get<About>(`/about?locale=en&populate=deep`),
  ])

  return {
    props: {
      about: about.data,
      generals,
    },
    revalidate: 1,
  }
}
