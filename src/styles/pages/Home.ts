import styled from 'styled-components';

export const Hero = styled.section`
  background: url('/hero/hero-bg.jpg');
  background-position: center;
  background-size: cover;

  min-height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 900px;

    transition: 0.2s;

    @media (max-width: 1024px) {
      width: 80%;
    }
  }
`;
