import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.main.dark};
  max-width: calc(300px - 1rem);
  padding: 1rem;
  background: ${({ theme }) => theme.colors.inverse};
  color: ${({ theme }) => theme.colors.main.dark};

  h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
