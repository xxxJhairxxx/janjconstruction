import React, { useState } from 'react'
import { Container } from '../globals/Container'
import { useLanguageContext } from '@/context/language.context'
import { useGenerals } from '@/context/generals.context'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
export const Footer = () => {
  const { general } = useGenerals()
  const {
    multilang,
    pagesUrls,
    urlPoliticEn,
    urlPoliticEs,
    urlBlogEn,
    urlBlogEs,
    toggle,
  } = useLanguageContext()
  const { asPath } = useRouter()
  const lang = asPath.split('/')[1]

  const politics = lang === 'en' || lang === '' ? urlPoliticEn : urlPoliticEs
  const resources = lang === 'en' || lang === '' ? urlBlogEn : urlBlogEs

  const [showAccordion, setShowAccordion] = useState(false)
  const [showAccordion2, setShowAccordion2] = useState(false)

  const validUrls =
    asPath === '/' ||
    asPath === '/es' ||
    asPath === '/en/frequent-questions' ||
    asPath === '/es/preguntas-frecuentes'

  return (
    <footer
      className={`Footer ${validUrls && 'alt'} ${
        asPath.split('/')[2] === 'rate' || asPath.split('/')[2] === 'califica'
          ? 'hidden'
          : ''
      }`}
      id='footer'
    >
      <Container>
        <div className='Footer-container'>
          <Link href={toggle ? '/' : '/es'} legacyBehavior>
            <figure className='Footer-logo-desktop cursor-pointer'>
              <Image
                src={general.logo.url}
                width={general.logo.width}
                height={general.logo.height}
                alt={
                  general.logo.alternativeText
                    ? general.logo.alternativeText
                    : ''
                }
                className='h-full w-full'
              />
            </figure>
          </Link>

          <div className='Footer-cont'>
            <div>
              <h4>{multilang.title_company}</h4>
              <ul className='Footer-cont-list links'>
                {pagesUrls(asPath).map(({ id, label, url }: any) => (
                  <Link key={id} href={url}>
                    <li>{label}</li>
                  </Link>
                ))}
              </ul>
            </div>

            <Link href={toggle ? '/' : '/es'} legacyBehavior>
              <figure className='Footer-logo-mobile cursor-pointer'>
                <Image
                  src={general.logo.url}
                  width={general.logo.width}
                  height={general.logo.height}
                  alt={
                    general.logo.alternativeText
                      ? general.logo.alternativeText
                      : ''
                  }
                  className='h-full w-full'
                />
              </figure>
            </Link>
          </div>

          <nav className='Footer-cont-desktop'>
            <div>
              <h4>{multilang.title_privacy}</h4>
              <ul className='Footer-cont-list'>
                {politics.map(({ id, title, slug }: any) => (
                  <Link
                    href={
                      toggle
                        ? `/en/${urlPoliticEn[0].rootPage?.url}/${slug}`
                        : `/es/${urlPoliticEs[0].rootPage?.url}/${slug}`
                    }
                    key={id}
                  >
                    {title}
                  </Link>
                ))}
              </ul>
            </div>
          </nav>

          <section className='Footer-cont-desktop'>
            <div>
              <h4>{multilang.title_resources}</h4>
              <ul className='Footer-cont-list'>
                {resources.map(({ id, title, slug }: any) => (
                  <Link
                    href={
                      toggle
                        ? `/en/${urlBlogEn[0]?.rootPage.url}/${slug}`
                        : `/es/${urlBlogEs[0]?.rootPage.url}/${slug}`
                    }
                    key={id}
                  >
                    {title}
                  </Link>
                ))}
              </ul>
            </div>
          </section>

          <div className='Footer-contInfo'>
            <div
              className='Footer-contInfo-title'
              onClick={() => setShowAccordion(!showAccordion)}
            >
              <h4>{multilang.title_privacy}</h4>

              <i className={`icon-arrow-${showAccordion ? 'down' : 'up'}`}></i>
            </div>

            <div
              className={`Footer-contInfo-content ${
                showAccordion ? '' : 'hidden'
              }`}
            >
              {politics.map(({ id, title, slug }: any) => (
                <Link
                  href={
                    toggle
                      ? `/en/${urlPoliticEn[0].rootPage?.url}/${slug}`
                      : `/es/${urlPoliticEs[0].rootPage?.url}/${slug}`
                  }
                  key={id}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          <section className='Footer-contInfo'>
            <div className='Footer-contInfo-title'
              onClick={() => setShowAccordion2(!showAccordion2)}
            >
              <h4>{multilang.title_resources}</h4>
              <i className={`icon-arrow-${showAccordion2 ? 'down' : 'up'}`}></i>
            </div>

            <div
              className={`Footer-contInfo-content ${
                showAccordion2 ? '' : 'hidden'
              }`}
            >
              {resources.map(({ id, title, slug }: any) => (
                <Link
                  href={
                    toggle
                      ? `/en/${urlBlogEn[0]?.rootPage.url}/${slug}`
                      : `/es/${urlBlogEs[0]?.rootPage.url}/${slug}`
                  }
                  key={id}
                >
                  {title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </Container>
      <div className='Footer-socialsContact'>
        <div>
          <div className='Footer-socials'>
            <p>{multilang.title_follow}</p>
            <ul className='Footer-socials-icons'>
              {general.social_networks.map(({ type, url }, i: number) => (
                <li
                  key={i}
                  title={`${!url ? 'Coming soon' : type}`}
                  className='item-socials'
                >
                  <a
                    className={`socials__link ${
                      !url ? 'pointer-events-none' : ''
                    }`}
                    href={url ? url : '#'}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className={`socials__icon icon-${type}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='Footer-contact'>
            <p>{multilang.title_contact}</p>
            <a href={`tel:${general.phone}`} rel='noreferrer'>
              <span>
                <i className='icon-phone'></i>
              </span>
              {general.phone}
            </a>

            <a href={`mailto:${general.email}`} rel='noreferrer'>
              <span>
                <i className='icon-email'></i>
              </span>
              {general.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
