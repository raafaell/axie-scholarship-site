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
              <img
                src="/nav/nav-logo-extended.png"
                alt="Axie Scholarship Rimiru Tempest"
              />
            </a>
          </Link>

          <Nav>
            <Link href="/" passHref>
              <NavItem>Home</NavItem>
            </Link>
            <Link href="/guia" passHref>
              <NavItem>Guia de Iniciação</NavItem>
            </Link>
            <Link href="/recrutamento" passHref>
              <NavItem>Recrutamento</NavItem>
            </Link>
            <Link href="/agenda" passHref>
              <NavItem>Agenda de Treinos</NavItem>
            </Link>
          </Nav>
          <Link href="/login" passHref>
            <PrincipalButton>Login</PrincipalButton>
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
          alt="Axie Scholarship Rimiru Tempest"
        />
        <Link href="/" passHref>
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/guia" passHref>
          <NavItem>Guia de Iniciação</NavItem>
        </Link>
        <Link href="/recrutamento" passHref>
          <NavItem>Recrutamento</NavItem>
        </Link>
        <Link href="/agenda" passHref>
          <NavItem>Agenda de Treinos</NavItem>
        </Link>
        <Link href="/login" passHref>
          <MobilePrincipalButton>Login</MobilePrincipalButton>
        </Link>
      </MobileNav>
    </>
  );
}

export default Header;
