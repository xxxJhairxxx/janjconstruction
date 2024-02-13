import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useNavbarContext } from '@/context/navbar.context'
import { Logo } from '../atoms/Logo'
import { useGenerals } from '@context/generals.context'

interface NavbarProps {
  isMenuOpen: boolean
  closeMenu: () => void
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
  const { multilanguage } = useGenerals()
  const { asPath } = useRouter()
  const { isTopZero, setShowContact } = useNavbarContext()

  const half = 4
  const menuPartOne = [...multilanguage.menu].slice(0, half)
  const menuPartTwo = [...multilanguage.menu].slice(half)

  const handleClick = () => {
    setShowContact(true)
    closeMenu()
  }

  return (
    <nav
      className={`Navbar ${isMenuOpen ? 'isActive' : ''} ${
        isTopZero ? 'shadow-none' : ''
      }`}
    >
      <Logo className='Navbar-logo' type={2} />
      <div className='Navbar-ctn'>
        <ul className='Navbar-ul'>
          {menuPartOne.map(({ id, label, url }) => (
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

          {menuPartTwo.map(({ id, label, url }) => (
            <li key={id} onClick={handleClick} className='Navbar-ul-link'>
              <span className={`Navbar-ul-li ${url === asPath && 'isActive'}`}>
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
