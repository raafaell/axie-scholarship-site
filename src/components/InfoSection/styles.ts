import styled from 'styled-components';

export const InfoWrapper = styled.section`
  background: #2d1925;
`;

export const InfoContainer = styled.div`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 2.5rem;

  @media (max-width: 414px) {
    padding: 0 2rem;
  }

  background: url('/section/info/info-bg.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 90rem auto;

  min-height: 660px;
  position: relative;

  @media (min-width: 780px) {
    &::before {
      content: '[]';
      color: transparent;
      font-size: 30rem;

      background: url('/section/info/rimuru01.png');
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: contain;

      position: absolute;
      bottom: 0;
      left: 0;
    }

    &::after {
      content: '[]';
      color: transparent;
      font-size: 30rem;

      background: url('/section/info/rimuru02.png');
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: contain;

      position: absolute;
      bottom: -30px;
      right: 0;
    }
  }
`;

export const Info = styled.div`
  background: url('/section/info/paper-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  max-width: 30rem;
  position: absolute;
  top: -1.8rem;
  right: 2rem;

  margin: 0 2rem;
  padding: 3.5rem;

  transition: 0.2s;

  @media (max-width: 620px) {
    right: 0;
  }

  @media (max-width: 480px) {
    margin: 0 1rem;
    padding: 2rem;
    padding-top: 2.5rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  p + p {
    margin-top: 1rem;
  }

  button {
    background: url('/section/info/button-bg.png');
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem 0 -4rem;
    width: 136px;
    height: 50px;

    color: ${({ theme }) => theme.colors.inverse};
    font-size: 1.25rem;
    font-weight: 500;

    &:hover {
      transform: scale(1.1) rotate(5deg);
    }

    @media (max-width: 480px) {
      margin: 1rem 0 -2rem;
    }
  }
`;
