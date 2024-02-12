import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useGenerals } from '../../context/generals.context'

interface LogoProps {
  className?: string
  type?: number
}

export const Logo: FC<LogoProps> = ({ className, type }) => {
  const { generals } = useGenerals()

  const i = type ? type : 0

  return (
    <Link href='/' legacyBehavior>
      <picture className={`logoCont ${className}`}>
        {generals.logo[i].url && (
          <Image
            priority
            src={generals.logo[i].url}
            width={generals.logo[i].width}
            height={generals.logo[i].height}
            alt={''}
          ></Image>
        )}
      </picture>
    </Link>
  )
}
