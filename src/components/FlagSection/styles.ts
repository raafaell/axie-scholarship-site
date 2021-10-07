import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  background: url('/section/flag/flag-section-bg.png');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% auto;

  padding: 6rem 0;

  @media (max-width: 1024px) {
    background-size: 100% auto;
    padding: 4rem 0;
  }
  @media (max-width: 780px) {
    background-size: 100% 100%;
    padding: 2rem 0;
  }
`;

export const Container = styled.div`
  max-width: 90rem;
  padding: 0 3.75rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
  @media (max-width: 580px) {
    padding: 0 1rem;
  }
`;

interface SideProps {
  side: 'top' | 'bottom';
}

export const Side = styled.div<SideProps>`
  ${({ side }) => {
    switch (side) {
      case 'top':
        return css`
          height: 5rem;
          background: url('/section/flag/flag-top.png');
          background-position: top center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          transition: 0.2s;

          @media (max-width: 1024px) {
            height: 4rem;
          }
          @media (max-width: 880px) {
            height: 3rem;
          }
          @media (max-width: 580px) {
            height: 2.3rem;
          }
          @media (max-width: 480px) {
            height: 1.5rem;
          }
        `;
      case 'bottom':
        return css`
          height: 6.875rem;
          background: url('/section/flag/flag-bottom.png');
          background-position: top center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          transition: 0.2s;

          @media (max-width: 1024px) {
            height: 5.3rem;
          }
          @media (max-width: 880px) {
            height: 4.4rem;
          }
          @media (max-width: 580px) {
            height: 3.2rem;
          }
          @media (max-width: 480px) {
            height: 2.2rem;
          }
        `;
    }
  }}
`;

export const Content = styled.div`
  background: url('/section/flag/flag-middle.png');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 13rem;
  transition: 0.2s;

  text-align: center;
  color: ${({ theme }) => theme.colors.highlight};

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 500;
  }

  p + p {
    margin-top: 1rem;
  }

  @media (max-width: 1280px) {
    padding: 1rem 8rem;

    h1 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 880px) {
    padding: 1rem 5rem;
  }
  @media (max-width: 480px) {
    padding: 1rem 3rem;
  }
`;
