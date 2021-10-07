import { ReactNode } from 'react';

import { Container } from './styles';

interface CheckpointProps {
  children: ReactNode;
  side: 'left' | 'right';
  dateString: string;
  imgSource: string;
  imgType: 'pin' | 'rimuru';
}

function Checkpoint({
  children,
  side,
  dateString,
  imgSource,
  imgType,
}: CheckpointProps) {
  return (
    <Container side={side} imgType={imgType}>
      <label>{dateString}</label>
      <strong>{children}</strong>
      <img src={imgSource} alt={imgType} />
    </Container>
  );
}

export default Checkpoint;
