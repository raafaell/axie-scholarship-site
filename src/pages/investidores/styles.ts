import styled, { css } from 'styled-components';

export const Hero = styled.section`
  background: url('/investors/hero/hero-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 8rem 0 4.5rem;

  transition: 0.2s;

  @media (max-width: 375px) {
    padding-top: 7rem;
  }
`;

export const HeroContainer = styled.div`
  position: relative;

  max-width: 90rem;
  margin: 0 auto;
  padding: 3.75rem 0;

  color: ${({ theme }) => theme.colors.inverse};
  text-align: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: 4.5rem;
    margin: 0 6.875rem 1.5rem;
    transition: 0.2s;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0 18rem;
    transition: 0.2s;
  }

  @media (max-width: 1366px) {
    h1 {
      margin: 0 2rem 1.5rem;
    }

    h2 {
      margin: 0 18rem;
    }
  }

  @media (max-width: 1060px) {
    padding: 2.75rem 0 3rem;

    h1 {
      font-size: 3.5rem;
    }

    h2 {
      margin: 0 14rem;
    }
  }

  @media (max-width: 840px) {
    padding: 1.5rem 0 3rem;

    h1 {
      font-size: 3rem;
    }

    h2 {
      margin: 0 4rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0rem 0 3rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      margin: 0 2rem;
    }
  }

  @media (max-width: 375px) {
    padding: 0 0 4rem;
  }
`;

interface HeroImgProps {
  side: 'left' | 'right';
}

export const HeroImg = styled.img<HeroImgProps>`
  position: absolute;
  bottom: -100px;
  transition: 0.2s;

  @media (max-width: 1060px) {
    height: 180px;
  }

  @media (max-width: 840px) {
    height: 160px;
    bottom: -120px;
  }

  @media (max-width: 500px) {
    height: 130px;
    bottom: -95px;
  }

  ${({ side }) => {
    switch (side) {
      case 'left':
        return css`
          left: 3.75rem;

          @media (max-width: 840px) {
            left: 1rem;
          }
        `;
      case 'right':
        return css`
          right: 3.75rem;

          @media (max-width: 840px) {
            right: 1rem;
          }
        `;
    }
  }}
`;

export const Main = styled.main`
  background: url('/investors/main/main-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 4rem 2rem;

  @media (max-width: 500px) {
    padding: 2rem;
  }

  h1 {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 6.875rem;

    margin-bottom: 1.5rem;

    font-size: 3rem;
    transition: 0.2s;

    @media (max-width: 1366px) {
      padding: 0 4.5rem;
    }

    @media (max-width: 850px) {
      padding: 0 2rem;
      font-size: 2.5rem;
    }

    @media (max-width: 500px) {
      padding: 0 1rem;
      font-size: 2rem;
    }

    @media (max-width: 375px) {
      padding: 0;
    }
  }

  p {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 6.875rem;

    font-size: 1.125rem;
    transition: 0.2s;

    @media (max-width: 1366px) {
      padding: 0 4.5rem;
    }

    @media (max-width: 850px) {
      padding: 0 2rem;
    }

    @media (max-width: 500px) {
      padding: 0 1rem;
      font-size: 1rem;
    }

    @media (max-width: 375px) {
      padding: 0;
    }

    & + p {
      margin-top: 1rem;
    }

    & + h1 {
      margin-top: 2.5rem;
    }
  }
`;

export const PlansSection = styled.section`
  display: none;
`;

export const PlansContainer = styled.div``;

export const Plan = styled.div``;

export const CardsContainer = styled.div``;

interface PlanButtonProps {
  color: 'purple' | 'green';
}

export const PlanButton = styled.button<PlanButtonProps>``;
