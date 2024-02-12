import { About, AboutData } from '@/interfaces/about'
import { Home } from '@/interfaces/home'
import { baseApi } from '@/lib/baseApi'
import { getGenerals } from '@/lib/getGenerals'
import { Title } from '@atoms/Title'
import { Container } from '@globals/Container'
import { GetStaticProps } from 'next'
import React from 'react'
import Markdown from 'react-markdown'

interface AboutProps {
  about: AboutData
}

const About = ({ about }: AboutProps) => {
  return (
    <div className='about'>
      <div className='about-description-one'>
        <Container>
          <Title subtitle={about.subtitle} title={about.title} />
          <Markdown>{about.description_one}</Markdown>
        </Container>
      </div>

      <div className='about-description-two'></div>
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
