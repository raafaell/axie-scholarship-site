import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background: #2d1925;
`;

export const Book = styled.div`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 2.5rem;

  @media (max-width: 414px) {
    padding: 0 2rem;
  }

  background: url('/section/book/book-bg.png');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 94rem auto;

  min-height: 540px;
  position: relative;

  @media (max-width: 780px) {
    background-image: url('/section/book/without-book-bg.png');
    min-height: 450px;
  }

  @media (max-width: 580px) {
    min-height: 730px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 36px;
  left: 51%;
  transform: translateX(-50%);

  width: 550px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 779px) {
    background: url('/section/book/page-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    top: -60px;
    width: 90%;
    padding: 1rem 2rem 2rem;
  }

  @media (max-width: 580px) {
    background: url('/section/book/page-portrait-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    top: 0px;
    width: 90%;
    padding: 2rem;
    padding-right: 2.7rem;

    flex-direction: column;
  }
`;

export const Side = styled.div`
  flex: 1;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.main.dark};

  padding: 0.6rem;

  & + & {
    margin-left: 2rem;
  }

  p + p {
    margin-top: 1rem;
  }

  @media (max-width: 780px) {
    padding: 1rem;

    & + & {
      margin-left: 0;
    }
  }

  @media (max-width: 580px) {
    padding: 0;

    & + & {
      margin-top: 1rem;
    }
  }
`;
