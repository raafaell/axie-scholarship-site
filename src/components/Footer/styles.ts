import styled from 'styled-components';

export const Wrapper = styled.section`
  background: url('/footer/footer-bg.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% auto;

  padding: 5rem 0;

  @media (max-width: 1024px) {
    background-size: 100% 100%;
    padding-bottom: 3rem;
  }

  @media (max-width: 580px) {
    padding: 3rem 0 2rem;
  }
`;

export const Content = styled.div`
  max-width: 90rem;
  padding: 0 3.75rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 6rem;

  img {
    align-self: center;
  }

  @media (max-width: 1280px) {
    grid-gap: 2rem;
  }

  @media (max-width: 1024px) {
    max-width: 50rem;
    grid-template-columns: 1fr;
    grid-gap: 3rem;

    img {
      justify-self: center;
    }
  }

  @media (max-width: 580px) {
    padding: 0 2rem;
  }
`;

export const Info = styled.div`
  color: ${({ theme }) => theme.colors.main.dark};

  display: flex;
  flex-direction: column;

  line-height: 1.5rem;

  h1 {
    margin-bottom: 1rem;
  }

  a:hover {
    text-decoration: underline;
    transform: translateY(-0.25rem);
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const SocialList = styled.div`
  display: flex;
  margin-top: 1rem;

  font-size: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.main.dark};
    margin-right: 1rem;
  }
`;
