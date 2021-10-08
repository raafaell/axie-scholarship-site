import styled from 'styled-components';

export const Container = styled.main`
  background: #c18157;

  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 2240px;
  }

  transition: 0.2s;

  @media (max-width: 770px) {
    padding-top: 40px;
  }
`;
