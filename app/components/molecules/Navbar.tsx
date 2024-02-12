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
  const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext()
  const { asPath } = useRouter()
  const { isTopZero } = useNavbarContext()

  const handleGoToSection = (url: string) => {
    goToSection(url)
    closeMenu()
  }

  const handleGoToSectionFromOtherPage = (url: string) => {
    setScrolltoSectionFromOtherPage(url)

    closeMenu()
  }

  const half = 4
  const menuPartOne = [...multilanguage.menu].slice(0, half)
  const menuPartTwo = [...multilanguage.menu].slice(half)

  return (
    <nav
      className={`Navbar ${isMenuOpen ? 'isActive' : ''} ${
        isTopZero ? 'shadow-none' : ''
      }`}
    >
      <Logo className='Navbar-logo' />
      <div className='Navbar-ctn'>
        <ul className='Navbar-ul'>
          {menuPartOne.map(({ id, label, url }) =>
            asPath !== '/' ? (
              <Link
                key={id}
                href={'/'}
                className={`Navbar-ul-link ${url === '/about' ? 'about' : ''}`}
                onClick={() => handleGoToSectionFromOtherPage(url)}
              >
                <li
                  className={`Navbar-ul-li`}
                  onClick={() => setScrolltoSectionFromOtherPage(url)}
                >
                  {label}
                </li>
              </Link>
            ) : (
              <li
                key={id}
                className={`Navbar-ul-li ${
                  '/' === asPath && activeSection === url ? 'isActive' : ''
                } ${url === '/about' ? 'about' : ''}`}
                onClick={() => handleGoToSection(url)}
              >
                {label}
              </li>
            )
          )}

          {menuPartTwo.map(({ id, label, url }) => (
            <Link
              key={id}
              href={url}
              onClick={closeMenu}
              className='Navbar-ul-contact'
            >
              <li
                className={`Navbar-ul-li ${url === asPath && 'isActive'}  ${
                  url === '/contact' && 'contact'
                } `}
                onClick={() => setScrolltoSectionFromOtherPage(url)}
              >
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}
