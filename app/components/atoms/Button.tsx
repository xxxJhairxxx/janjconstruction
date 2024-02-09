import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { useLanguageContext } from '@/context/language.context'
import { useGenerals } from '@/context/generals.context'

interface ButtonProps extends PropsWithChildren {
  url?: string
  className?: string
  variation?: 'btnmore' | 'special'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  url,
  className,
  variation,
}) => {
  const { general } = useGenerals()
  const { multilang } = useLanguageContext()
  if (variation === 'special') {
    return (
      <a href={`tel:${general.phone}`} className={`button ${className}`}>
        <i className='icon-phone'></i>
        <div>
          {multilang.label_call_specialist} 
          <span>{general.phone}</span>
        </div>
      </a>
    )
  }

  if (variation === 'btnmore' && url) {
    return (
      <Link className={`button-more-blogs`} href={url}>
        {children}
      </Link>
    )
  }
  
  return url ? (
    <Link className={`button ${className}`} href={url}>
      {children}
    </Link>
  ) : (
    <button className={`button ${className}`}>{children}</button>
  )
}

export default Button
