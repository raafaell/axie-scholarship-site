import Header from '../Header';
import InProgressMessage from '../InProgressMessage';

import { Container } from './styles';

interface FakePageProps {
  pageImgSrc: string;
}

function FakePage({ pageImgSrc }: FakePageProps) {
  return (
    <>
      <Header />
      <Container>
        <img src={pageImgSrc} alt="Página" />
        <InProgressMessage />
      </Container>
    </>
  );
}

export default FakePage;
