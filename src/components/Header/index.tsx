import { useState, useCallback } from 'react';
import Link from 'next/link';

import { HiMenu, HiOutlineX } from 'react-icons/hi';

import {
  FixedWraper,
  Container,
  Nav,
  NavItem,
  PrincipalButton,
  MobileNavButton,
  MobileNav,
  MobilePrincipalButton,
} from './styles';

function Header() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  const handleToggleMobileMenu = useCallback(() => {
    setMobileNavIsOpen(prevState => !prevState);
  }, []);

  return (
    <>
      <FixedWraper>
        <Container>
          <Link href="/" passHref>
            <a>
              <img src="/nav/nav-logo-extended.png" alt="Axie Infinity Zone"/>
            </a>
          </Link>

          <Nav>
            <Link href="/" passHref>
              <NavItem>Home</NavItem>
            </Link>
            <Link href="/guia" passHref>
              <NavItem>Guia de Iniciação</NavItem>
            </Link>
            <Link href="/investidores" passHref>
              <NavItem>Investidores</NavItem>
            </Link>
            <Link href="/ranking" passHref>
              <NavItem>Ranking dos Scholars</NavItem>
            </Link>
          </Nav>
          <Link href="https://discord.gg/nYUD32p3EN" passHref>
            <PrincipalButton>Entrar</PrincipalButton>
          </Link>
          <MobileNavButton onClick={handleToggleMobileMenu}>
            <HiMenu size="2rem" />
          </MobileNavButton>
        </Container>
      </FixedWraper>

      <MobileNav active={mobileNavIsOpen}>
        <MobileNavButton onClick={handleToggleMobileMenu}>
          <HiOutlineX size="2rem" />
        </MobileNavButton>

        <img
          src="/nav/nav-logo-extended.png"
          alt="Axie Infinity Zone"
        />
        <Link href="/" passHref>
              <NavItem>Home</NavItem>
            </Link>
            <Link href="/guia" passHref>
              <NavItem>Guia de Iniciação</NavItem>
            </Link>
            <Link href="/investidores" passHref>
              <NavItem>Investidores</NavItem>
            </Link>
            <Link href="/ranking" passHref>
              <NavItem>Ranking dos Scholars</NavItem>
            </Link>
        <Link href="https://discord.gg/nYUD32p3EN" passHref>
          <MobilePrincipalButton>Entrar</MobilePrincipalButton>
        </Link>
      </MobileNav>
    </>
  );
}

export default Header;
