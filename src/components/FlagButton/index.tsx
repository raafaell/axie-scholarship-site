import { ReactNode } from 'react';

import { Container } from './styles';

interface FlagButtonProps {
  children: ReactNode;
}

function FlagButton({ children }: FlagButtonProps) {
  return <Container>{children}</Container>;
}

export default FlagButton;
