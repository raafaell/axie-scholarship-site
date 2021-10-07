import styled from 'styled-components';

export const Wrapper = styled.section`
  background: url('/section/roadmap/roadmap-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 7rem 0;
  overflow-x: hidden;

  h1,
  h2 {
    max-width: 68.75rem;
    padding: 0 5rem;
    margin: 0 auto;

    color: ${({ theme }) => theme.colors.inverse};
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: 4.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 8rem;
  }

  @media (max-width: 800px) {
    h1,
    h2 {
      padding: 0 2rem;
    }

    h1 {
      font-size: 3.3rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.3rem;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 800px) {
    padding: 6rem 0 2rem;
  }

  @media (max-width: 550px) {
    padding: 5rem 0 1rem;
  }

  @media (max-width: 390px) {
    padding: 5rem 0 2rem;
  }
`;

export const Checkpoints = styled.div`
  background: url('/section/roadmap/timeline-trace.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 9rem 0rem;

  max-width: 82.5rem;
  padding: 0 3.8125rem;
  margin: 4rem auto;

  @media (max-width: 800px) {
    background: none;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    padding: 0 2rem;
  }
`;
