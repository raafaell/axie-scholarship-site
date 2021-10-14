import styled, { css } from 'styled-components';

import Footer from '../../components/Footer';

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

  padding: 4rem 2rem 8rem;

  @media (max-width: 500px) {
    padding: 2rem;
    padding-bottom: 6.5rem;
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
  background: url('/investors/plans/plans-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 2rem 2rem;

  position: relative;

  > img {
    width: 100%;
    max-width: 120rem;

    position: absolute;
    top: calc(100% - 85px);
    left: 50%;

    transform: translateX(-50%);

    transition: 0.2s;

    @media (max-width: 1600px) {
      top: calc(100% - 75px);
    }

    @media (max-width: 1200px) {
      top: calc(100% - 55px);
    }

    @media (max-width: 900px) {
      top: calc(100% - 45px);
    }

    @media (max-width: 700px) {
      top: calc(100% - 30px);
    }

    @media (max-width: 415px) {
      top: calc(100% - 25px);
    }
    @media (max-width: 375px) {
      top: calc(100% - 20px);
    }
  }

  @media (max-width: 415px) {
    padding: 2rem 1rem;
  }
`;

export const PlansContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  max-width: 90rem;
  margin: 0 auto;
  padding: 0 6.875rem 12rem;

  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20rem;
  }

  @media (max-width: 740px) {
    padding: 0;
    padding-bottom: 20rem;
  }

  @media (max-width: 415px) {
    padding-bottom: 16rem;
  }
`;

interface PlanProps {
  side: 'left' | 'right';
}

export const Plan = styled.div<PlanProps>`
  width: 100%;
  max-width: 28.125rem;

  background: url('/investors/plans/scroll-body-l.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  position: relative;

  padding: 1rem 4rem 6rem 2rem;

  @media (max-width: 500px) {
    padding: 1rem 3rem 6rem 1rem;
  }

  @media (max-width: 415px) {
    padding: 1rem 2rem 4rem 1rem;
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 95px;
    top: -94px;
    left: 0;

    background: url('/investors/plans/scroll-top-l.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  ${({ side }) => {
    if (side === 'right') {
      return css`
        background-image: url('/investors/plans/scroll-body-r.png');
        padding: 1rem 2rem 6rem 4rem;

        @media (max-width: 500px) {
          padding: 1rem 1rem 6rem 3rem;
        }

        @media (max-width: 415px) {
          padding: 1rem 1rem 4rem 2.5rem;
        }

        @media (max-width: 340px) {
          padding: 1rem 1rem 4rem 2rem;
        }

        &::before {
          background-image: url('/investors/plans/scroll-top-r.png');
          left: unset;
          right: 0;
        }
      `;
    }
  }}

  h1 {
    position: absolute;
    top: -4rem;
    width: 75%;

    font-size: 2.5rem;
    text-align: center;

    @media (max-width: 415px) {
      font-size: 2rem;
    }
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    margin-left: 28px;
    position: relative;

    & + li {
      margin-top: 1rem;
    }

    > img {
      position: absolute;
      height: 20px;
      top: 0;
      left: -28px;
    }
  }

  p + p {
    margin-top: 0.5rem;
  }

  @media (max-width: 1200px) {
    &:first-of-type {
      margin-bottom: 15rem;
    }
  }
`;

interface CardsContainerProps {
  side: 'left' | 'right';
}

export const CardsContainer = styled.div<CardsContainerProps>`
  height: 160px;
  position: absolute;
  bottom: -85px;

  background: url('/investors/plans/cards.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  ${({ side }) => {
    switch (side) {
      case 'left':
        return css`
          left: -1rem;
          right: 1rem;

          @media (max-width: 350px) {
            left: -0.5rem;
            right: 0.5rem;
          }
        `;
      case 'right':
        return css`
          left: 1rem;
          right: -1rem;

          @media (max-width: 350px) {
            left: 0.5rem;
            right: -0.5rem;
          }
        `;
    }
  }}

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    height: 140px;
    bottom: -75px;
  }
`;

interface PlanButtonProps {
  color: 'purple' | 'green';
}

export const PlanButton = styled.button<PlanButtonProps>`
  border: none;
  background: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  ${({ color }) => {
    switch (color) {
      case 'purple':
        return css`
          background-image: url('/investors/plans/flag-purple.png');
        `;
      case 'green':
        return css`
          background-image: url('/investors/plans/flag-green.png');
        `;
    }
  }}

  width: 50%;
  height: 100%;
  margin-top: 2.5rem;
  padding: 2rem 2.5rem;

  color: ${({ theme }) => theme.colors.highlight};
  font-size: 0.875rem;
  font-weight: 500;

  transition: 0.2s;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 500px) {
    width: 60%;
    margin-top: 3.5rem;
    font-size: 1rem;
  }

  @media (max-width: 415px) {
    width: 70%;
    padding: 2rem 3.5rem;
  }
`;

export const Currency = styled.div`
  background: url('/investors/plans/flag.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  width: 350px;
  height: 200px;

  z-index: 2;
  position: absolute;
  left: 150px;
  bottom: -32px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.8rem;
    line-height: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.highlight};
  }

  @media (max-width: 1200px) {
    left: 51%;
    transform: translateX(-50%);
  }

  @media (max-width: 415px) {
    width: 300px;
    height: 150px;
    bottom: -40px;
  }
`;

export const StyledFooter = styled(Footer)`
  padding-top: 20rem;

  @media (max-width: 1700px) {
    padding-top: 16rem;
  }

  @media (max-width: 1400px) {
    padding-top: 13rem;
  }

  @media (max-width: 1060px) {
    padding-top: 10rem;
  }

  @media (max-width: 770px) {
    padding-top: 7rem;
  }

  @media (max-width: 500px) {
    padding-top: 5rem;
  }
`;
