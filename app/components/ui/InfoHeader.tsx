import { FC } from 'react'
import { useGenerals } from '../../context/generals.context'
import { Container } from '../globals/Container'
import { SwitchLanguage } from '@globals/SwitchLanguage'
import Link from 'next/link'

export const InfoHeader: FC = () => {
  const { general } = useGenerals()

  return (
    <div className='infoHeader'>
      <Container className='infoHeader-container'>
        <div className='flex items-center'>
          <SwitchLanguage />

          <ul className='infoHeader-info'>
            <li className='infoHeader-info-li'>
              <Link
                className='phone-link'
                href={`tel:${general.phone}`}
                rel='noreferrer'
              >
                <span>
                  <i className='icon-phone'></i>
                </span>
                {general.phone}
              </Link>
            </li>

            <li className='infoHeader-info-li'>
              <Link href={`mailto:${general.email}`} rel='noreferrer'>
                <span>
                  <i className='icon-email'></i>
                </span>
                {general.email}
              </Link>
            </li>
          </ul>
        </div>

        <ul className='infoHeader-socials'>
          {general.social_networks.map(({ type, url }, i: number) => (
            <li
              key={i}
              title={`${!url ? 'Coming soon' : type}`}
              className='item-socials'
            >
              <a
                className={`socials__link ${!url ? 'pointer-events-none' : ''}`}
                href={url ? url : '#'}
                target='_blank'
                rel='noreferrer'
              >
                <i className={`socials__icon icon-${type}-x`} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default InfoHeader
