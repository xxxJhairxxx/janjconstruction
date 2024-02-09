import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { useLanguageContext } from '@/context/language.context'
import { useGenerals } from '@/context/generals.context'

interface ButtonProps extends PropsWithChildren {
  url?: string
  className?: string
  icon?:String
}

export const Button: React.FC<ButtonProps> = ({
  children,
  url,
  className,
  icon
}) => {
  const { general } = useGenerals()
  const { multilang } = useLanguageContext()


  return url ? (
    <Link className={`button ${className}`} href={url}>
      {children}
    </Link>
  ) : (
    <button className={`button ${className}`}>{children}</button>
  )
}

export default Button
