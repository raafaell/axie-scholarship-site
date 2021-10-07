import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const FixedWraper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-image: url('/nav/nav-background-l.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 90rem auto;

  margin: 0 auto;
  max-width: 90rem;
  padding: 0 3.75rem;

  transition: padding 0.2s;

  @media (max-width: 1366px) {
    padding: 0 2rem;
  }

  > a {
    display: flex;
    height: 5rem;
    margin-top: 0.5rem;

    @media (max-width: 1366px) {
      height: 4.4rem;
    }

    &:hover {
      transform: scale(1.1) rotate(-5deg);
    }
  }

  img {
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin: 0.625rem;

  @media (max-width: 875px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.inverse};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }

  & + & {
    margin-left: 1.5rem;
  }

  @media (max-width: 875px) {
    padding: 1.5rem;

    & + & {
      margin-left: 0;
    }
  }
`;

export const PrincipalButton = styled.button`
  @media (max-width: 875px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: url('/nav/nav-primary-button.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;

  border: none;

  width: 10.75rem;
  height: 5.625rem;
  padding-top: 1.25rem;

  @media (max-width: 1366px) {
    height: 4.8rem;
    padding-top: 0.7rem;
    background-size: cover;
  }

  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.highlight};

  &:hover {
    color: ${({ theme }) => lighten(0.1, theme.colors.highlight)};
    transform: scale(1.1);
  }
`;

export const MobileNavButton = styled.button`
  @media (min-width: 875px) {
    display: none;
  }

  position: fixed;
  top: 0.5rem;
  right: 2rem;

  border: none;
  background: none;
  color: ${({ theme }) => lighten(0.1, theme.colors.inverse)};
`;

interface MobileNavProps {
  active: boolean;
}

export const MobileNav = styled.nav<MobileNavProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url('/nav/nav-wood-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  overflow-y: auto;

  padding: 2rem;

  transition: visibility 0s, transform 0.2s ease;

  > button,
  > a {
    transition: inherit;
  }

  > img {
    width: 7rem;
    margin-bottom: 1rem;
  }

  ${props =>
    !props.active &&
    css`
      visibility: hidden;
      transform: translateX(100%);
    `};

  @media (min-width: 875px) {
    display: none;
  }
`;

export const MobilePrincipalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: url('/nav/nav-primary-button-flag.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;

  border: none;

  width: 160px;
  padding: 2rem;
  margin-top: 1.5rem;

  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.highlight};

  &:hover {
    color: ${({ theme }) => lighten(0.1, theme.colors.highlight)};
    transform: scale(1.1);
  }
`;
