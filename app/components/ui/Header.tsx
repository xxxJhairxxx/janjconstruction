import { useNavbarContext } from '@/context/navbar.context'
import React, { useState } from 'react'
import { Container } from '../globals/Container'
import { Logo } from '../atoms/Logo'
import { MenuIcon } from '../atoms/MenuIcon'
import { Navbar } from '../molecules/Navbar'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { isTopZero } = useNavbarContext()

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
    document.body.classList.toggle('no-scroll')
  }

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.classList.remove('no-scroll')
  }

  return (
    <header className={`Header ${isTopZero ? 'top' : ''}`}>
      <Container className='Header-ctn'>
        <Logo className={`Header-Logo`} />
        <Logo className='Header-Logo2' />

        <div className={`Header-menuIcon ${isMenuOpen && 'isActive'}`}>
          <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
        </div>
        <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <div
          className={`Header-overlay ${isMenuOpen && 'isActive'}`}
          onClick={closeMenu}
        />
      </Container>
    </header>
  )
}

export default Header
