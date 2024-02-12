import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef } from 'react'
import { useNavbarContext } from '@/context/navbar.context'
import { goToSection } from '@/lib/utils'
import { Logo } from '../atoms/Logo'
import { useGenerals } from '@context/generals.context'

interface NavbarProps {
  isMenuOpen: boolean
  closeMenu: () => void
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
  const { multilanguage } = useGenerals()
  const { asPath } = useRouter()
  const { isTopZero } = useNavbarContext()

  return (
    <nav
      className={`Navbar ${isMenuOpen ? 'isActive' : ''} ${
        isTopZero ? 'shadow-none' : ''
      }`}
    >
      <Logo className='Navbar-logo' type={2} />
      <div className='Navbar-ctn'>
        <ul className='Navbar-ul'>
          {multilanguage.menu.map(({ id, label, url }) => (
            <Link
              key={id}
              href={url}
              onClick={closeMenu}
              className='Navbar-ul-link'
            >
              <li className={`Navbar-ul-li ${url === asPath && 'isActive'}`}>
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}
