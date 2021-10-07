import styled from 'styled-components';

export const Container = styled.div`
  background: url('/section/getin/table-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (max-width: 1440px) {
    background-size: 120rem 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  margin: -5px 0;

  overflow: visible;
`;
