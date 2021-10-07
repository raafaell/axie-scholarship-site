import styled from 'styled-components';

export const Container = styled.button`
  background: url('/section/getin/red-button-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  border: none;

  padding: 2.6rem;
  margin: -2rem 0;

  color: ${({ theme }) => theme.colors.highlight};
  font-size: 1.1rem;
  font-weight: 500;
  z-index: 2;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;
