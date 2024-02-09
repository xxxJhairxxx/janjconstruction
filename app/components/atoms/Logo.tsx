import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useGenerals } from '../../context/generals.context'
import { useLanguageContext } from '@/context/language.context'

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
  const { general } = useGenerals()
  const { toggle } = useLanguageContext()

  return (
    <Link href={toggle ? '/' : '/es'} legacyBehavior>
      <picture className={`logoCont ${className}`}>
        {general.logo && (
          <Image
            priority
            src={general.logo.url}
            width={general.logo.width}
            height={general.logo.height}
            alt={""}
          ></Image>
        )}
      </picture>
    </Link>
  )
}
