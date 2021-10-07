import styled from 'styled-components';

export const Wrapper = styled.section`
  background: url('/section/contact/table-bg.png');
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
  padding: 1.5rem;

  overflow: visible;
  position: relative;

  h1 {
    position: absolute;
    top: -70px;
    margin-top: 2.5rem;
  }
`;

export const Content = styled.div`
  width: 82.5rem;
  margin: 0 3.75rem;

  position: relative;
  display: flex;
  justify-content: center;

  transition: 0.2s;

  @media (max-width: 1100px) {
    justify-content: flex-end;
    padding: 0 2rem;
    margin: 0 4.75rem;
  }

  @media (max-width: 1024px) {
    margin: 0 2.75rem;
  }

  @media (max-width: 860px) {
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 580px) {
    margin: 1rem 0;
  }

  img {
    transition: 0.2s;
    position: absolute;
    left: 0;
    top: -100px;

    width: 200px;

    @media (max-width: 900px) {
      top: -80px;
      width: 160px;
    }

    @media (max-width: 860px) {
      display: none;
    }
  }

  form {
    display: flex;

    input {
      width: 25rem;
      background: ${({ theme }) => theme.colors.inverse};
      border: 1px solid ${({ theme }) => theme.colors.main.default};
      color: ${({ theme }) => theme.colors.main.dark};
      border-radius: 0.5rem;

      margin-right: 1rem;
      padding: 0.5rem 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors.main.default};
      }
    }

    @media (max-width: 580px) {
      width: 100%;
      flex-direction: column;

      input {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
      }
    }

    button {
      background: url('/section/contact/button-bg.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem 1.5rem 0.8rem;
      width: min-content;

      color: ${({ theme }) => theme.colors.highlight};
      font-size: 1rem;
      font-weight: 500;

      &:hover {
        transform: scale(1.1) rotate(5deg);
      }
    }
  }
`;
