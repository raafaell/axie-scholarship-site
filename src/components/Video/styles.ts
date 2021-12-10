import styled, { css } from 'styled-components';

interface VideoProps {
  position: 'center' | 'right' | 'left';
}

export const Container = styled.div<VideoProps>`
  margin: 6rem auto;
  max-width: 1440px;

  padding: 0 110px;

  @media (max-width: 1366px) {
    padding: 0 72px;
  }

  @media (max-width: 850px) {
    margin: 4rem auto;
    padding: 0 32px;
  }

  @media (max-width: 500px) {
    padding: 0 16px;
  }

  @media (max-width: 375px) {
    margin: 3rem auto;
    padding: 0;
  }

  h1,
  p {
    padding: 0 !important;
    margin: 0 !important;

    & + p {
      margin-top: 1rem !important;
    }
  }

  ${({ position }) =>
    position === 'center' &&
    css`
      text-align: center;

      @media (max-width: 1080px) {
        text-align: left;
      }
    `}

  ${({ position }) =>
    position !== 'center' &&
    css`
      @media (min-width: 1080px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;

        align-items: center;
      }

      h1 {
        margin-bottom: 1rem !important;

        @media (min-width: 1080px) {
          font-size: 2rem !important;
        }
      }
    `}

    ${({ position }) =>
    position === 'left' &&
    css`
      @media (min-width: 1080px) {
        direction: rtl;
        text-align: left;
      }
    `}
`;

export const VideoWrapper = styled.div<VideoProps>`
  > div {
    position: relative;
    pointer-events: none;

    iframe {
      pointer-events: auto;
    }

    &::after {
      content: '';
      background: url('/components/video/border.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;

      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  ${({ position }) =>
    position === 'center' &&
    css`
      max-width: 63rem;
      margin: 0 auto;

      > div {
        margin: 2rem auto;

        @media (max-width: 850px) {
          margin: 1.5rem auto;
        }
      }
    `}

  ${({ position }) =>
    position !== 'center' &&
    css`
      max-width: 63rem;
      margin: 0 auto;

      > div {
        margin: 0 auto;

        @media (max-width: 1080px) {
          margin: 1.5rem auto 0;
        }
      }
    `}
`;

export const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Side = styled.div``;
