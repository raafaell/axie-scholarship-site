import styled from 'styled-components';

import FlagButton from '../FlagButton';

export const Wrapper = styled.section`
  background: url('/section/tutorial/tutorial-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Separator = styled.div`
  height: 0.7rem;
  background: url('/section/tutorial/separator-bg.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 110%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 6.25rem;

  max-width: 90rem;
  padding: 0 3.75rem;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }

  @media (max-width: 520px) {
    padding: 0 2rem;
    margin: 0 0 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.inverse};

  h1 {
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    width: 100%;
    font-weight: 400;
    line-height: 1.7rem;

    & + p {
      margin-top: 0.8rem;
    }
  }
`;

export const Icon = styled.p`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const StyledFlagButton = styled(FlagButton)`
  margin: 0 0 -2.5rem;
`;
