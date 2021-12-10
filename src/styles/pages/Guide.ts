import styled from 'styled-components';

export const Hero = styled.section`
  background: url('/guide/hero/hero-bg.jpg');
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
  padding: 3.75rem 6.875rem;

  color: ${({ theme }) => theme.colors.inverse};

  h1 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    transition: 0.2s;
  }

  h2 {
    width: 60%;

    font-size: 1.125rem;
    font-weight: 400;
    transition: 0.2s;
  }

  @media (max-width: 1060px) {
    padding: 2.75rem 6.875rem 3rem;

    h1 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 840px) {
    padding: 1.5rem 4rem 3rem;

    h1 {
      font-size: 3.5rem;
    }

    h2 {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    padding: 0rem 3rem 3rem;

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 375px) {
    padding: 0 2rem 4rem;
  }
`;

export const HeroImg = styled.img`
  position: absolute;
  bottom: -200px;
  transition: 0.2s;

  @media (max-width: 1060px) {
    height: 350px;
    bottom: -180px;
  }

  @media (max-width: 840px) {
    height: 200px;
    bottom: -180px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1) rotate(45deg);
  }

  @media (max-width: 500px) {
    height: 170px;
    bottom: -140px;
  }

  right: 3.75rem;

  @media (max-width: 840px) {
    left: 1rem;
  }
`;

export const Main = styled.main`
  background: url('/investors/main/main-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 4rem 2rem 2rem;

  @media (max-width: 1060px) {
    padding-top: 6rem;
    padding-bottom: 1px;
  }

  @media (max-width: 840px) {
    padding-top: 8rem;
    padding-bottom: 1px;
  }

  @media (max-width: 500px) {
    padding: 6rem 2rem 2rem;
    padding-bottom: 1rem;
  }

  h1 {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 6.875rem;

    margin-bottom: 1.5rem;

    font-family: ${({ theme }) => theme.fonts.sansSerif};
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

export const BlueMain = styled(Main)`
  background: url('/guide/blue-main-bg.jpg');
  color: ${({ theme }) => theme.colors.inverse};

  padding: 2rem;

  @media (max-width: 1060px) {
    padding: 1rem 2rem;
  }
`;

export const BeAMember = styled.section`
  background: url('/guide/clouds-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.2s;

  padding-top: 2rem;

  > h1 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: 2.5rem;
    text-align: center;
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 110px;

    transition: 0.2s;

    @media (max-width: 1280px) {
      padding: 0 80px;
      font-size: 2rem;
      margin-bottom: 24px;
    }

    @media (max-width: 875px) {
      padding: 0 40px;
      font-size: 1.8rem;
    }

    @media (max-width: 700px) {
      margin-bottom: 56px;
    }

    @media (max-width: 580px) {
      padding: 0 24px;
      font-size: 1.4rem;
    }

    @media (max-width: 414px) {
      padding: 0 16px;
      font-size: 1.4rem;
      margin-bottom: 40px;
    }
  }

  > div {
    min-height: 120px;
    background: url('/section/contact/table-bg.png');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100% 120px;

    transition: 0.2s;

    @media (max-width: 1440px) {
      background-size: 120rem 120px;
    }

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin: -5px 0;
    padding: 0 160px 16px;

    @media (max-width: 1280px) {
      padding: 0 80px 16px;
    }

    @media (max-width: 900px) {
      padding: 0 40px 16px;
    }

    @media (max-width: 800px) {
      img {
        width: 180px;
      }
    }

    @media (max-width: 700px) {
      justify-content: center;

      img {
        display: none;
      }
    }

    overflow: visible;
    position: relative;
  }

  button {
    margin-bottom: 16px;
  }
`;

export const Separator = styled.div`
  height: 1.2rem;
  background: url('/section/tutorial/separator-bg.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 110%;
`;
