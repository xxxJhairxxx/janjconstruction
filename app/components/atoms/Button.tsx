import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  url?: string
  className?: string
  icon?:string
  onClick?: ()=> void
  white?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  url,
  className,
  icon,
  onClick,
  white = false
}) => {

  return url ? (
    <Link className={`button ${white?"btn-white":""} ${className}`} href={url}>
      {children}
    </Link>
  ) : (
    <button className={`button ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button
