import { ReactNode } from 'react';

import { Container, VideoWrapper, VideoFrame, Side } from './styles';

interface VideoProps {
  children: ReactNode;
  title: string;
  youtubeId: string;
  position: 'center' | 'right' | 'left';
}

function Video({ children, title, youtubeId, position }: VideoProps) {
  return (
    <Container position={position}>
      <Side>
        <h1>{title}</h1>
        {position !== 'center' && children}
      </Side>
      <Side>
        <VideoWrapper position={position}>
          <VideoFrame>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoFrame>
          {position === 'center' && children}
        </VideoWrapper>
      </Side>
    </Container>
  );
}

export default Video;
