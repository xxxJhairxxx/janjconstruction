import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useGenerals } from '../../context/generals.context'

interface LogoProps {
  className?: string
  type?: number
}

export const Logo: FC<LogoProps> = ({ className, type }) => {
  const { general } = useGenerals()

  const i = type ? type : 0

  return (
    <Link href='/' legacyBehavior>
      <picture className={`logoCont ${className}`}>
        {general.logo[i].url && (
          <Image
            priority
            src={general.logo[i].url}
            width={general.logo[i].width}
            height={general.logo[i].height}
            alt={''}
          ></Image>
        )}
      </picture>
    </Link>
  )
}
