import { ReactNode } from 'react';

import { Container } from './styles';

interface FlagButtonProps {
  children: ReactNode;
  className?: string;
}

function FlagButton({ children, className }: FlagButtonProps) {
  return <Container className={className}>{children}</Container>;
}

export default FlagButton;
