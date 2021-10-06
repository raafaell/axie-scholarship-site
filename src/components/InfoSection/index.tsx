import Link from 'next/link';
import { InfoWrapper, InfoContainer, Info } from './styles';

function InfoSection() {
  return (
    <InfoWrapper>
      <InfoContainer>
        <Info>
          <h2>Sua importante jornada começa agora</h2>
          <p>
            Um mundo completamente novo está diante de você, o mais novo jogador
            de Axie Infinity. Você está pronto para explorar esse novo universo
            atrás de diversão e riquezas?
          </p>
          <p>
            O game online baseado em NFT que se utiliza de criptomoeda AXS e
            SLP, onde o jogador pode conquistar tokens (SLP) através de
            batalhas, coletas e a construção do seu próprio reino.
          </p>
          <p>
            Você pode impactar toda a sua vida com os recursos econômicos do
            próprio game e gerar riqueza.
          </p>
          <p>
            Entenda agora mesmo como obter conquistas no universo da Axie
            Infinity com a Rimuru Tempest Scholarship.
          </p>
          <Link href="/guia">
            <button>Saiba mais</button>
          </Link>
        </Info>
      </InfoContainer>
    </InfoWrapper>
  );
}

export default InfoSection;
