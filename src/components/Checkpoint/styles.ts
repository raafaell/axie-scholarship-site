import styled, { css } from 'styled-components';

interface CheckpointProps {
  side: 'left' | 'right';
  imgType: 'pin' | 'rimuru';
}

export const Container = styled.div<CheckpointProps>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  max-width: 380px;
  padding: 2.5rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: 1.125rem;
  text-align: center;

  @media (max-width: 800px) {
    width: 100%;
    height: 160px;
  }

  @media (max-width: 450px) {
    height: unset;
  }

  @media (max-width: 340px) {
    font-size: 1rem;
    padding: 2rem;
  }

  label {
    transition: 0.2s;
    position: absolute;
    top: -1rem;

    color: ${({ theme }) => theme.colors.inverse};
    font-size: 1rem;
  }

  ${({ side }): any => {
    switch (side) {
      case 'left':
        return css`
          background-image: url('/section/roadmap/checkpoint-left.png');
          transform: translateY(-2rem);
          margin-left: auto;

          @media (max-width: 800px) {
            transform: translateY(0);
            margin: 0 auto;
          }

          label {
            transform: rotate(5deg);
          }
        `;
      case 'right':
        return css`
          background-image: url('/section/roadmap/checkpoint-right.png');
          transform: translateY(6rem);

          @media (max-width: 800px) {
            transform: translateY(0);
            margin: 0 auto;
          }

          label {
            transform: rotate(-5deg);
          }
        `;
    }
  }};

  img {
    position: absolute;
    transition: 0.2s;

    ${({ imgType, side }): any => {
      if (imgType === 'pin' && side === 'left') {
        return css`
          top: -20px;
          left: 0;
          width: 60px;

          @media (max-width: 550px) {
            top: 0;
            width: 50px;
          }

          @media (max-width: 465px) {
            top: 0;
            width: 50px;
          }

          @media (max-width: 390px) {
            top: 0;
            width: 35px;
          }
        `;
      }
      if (imgType === 'pin' && side === 'right') {
        return css`
          top: -20px;
          right: 0;
          width: 60px;

          @media (max-width: 550px) {
            top: 0;
            width: 50px;
          }

          @media (max-width: 465px) {
            top: 0;
            width: 50px;
          }

          @media (max-width: 390px) {
            top: 0;
            width: 35px;
          }
        `;
      }
      if (imgType === 'rimuru' && side === 'left') {
        return css`
          top: -80px;
          left: -80px;
          width: 150px;

          @media (max-width: 550px) {
            top: -70px;
            left: -40px;
            width: 130px;
          }

          @media (max-width: 465px) {
            top: -50px;
            left: -30px;
            width: 110px;
          }

          @media (max-width: 390px) {
            top: unset;
            bottom: -50px;
            left: -30px;
            width: 90px;
          }
        `;
      }
      if (imgType === 'rimuru' && side === 'right') {
        return css`
          top: -80px;
          right: -80px;
          width: 150px;

          @media (max-width: 550px) {
            top: -70px;
            right: -40px;
            width: 130px;
          }

          @media (max-width: 465px) {
            top: -50px;
            right: -30px;
            width: 110px;
          }

          @media (max-width: 390px) {
            top: unset;
            bottom: -40px;
            right: -25px;
            width: 90px;
          }
        `;
      }
    }};
`;
