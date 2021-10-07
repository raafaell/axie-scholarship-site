import { FaUniversity, FaFileContract, FaTrophy } from 'react-icons/fa';

import {
  Wrapper,
  Separator,
  Container,
  Content,
  Icon,
  StyledFlagButton,
} from './styles';

function TutorialSection() {
  return (
    <>
      <Separator />
      <Wrapper>
        <Container>
          <Content>
            <Icon>
              <FaUniversity />
            </Icon>
            <h1>Academia</h1>
            <p>
              Seja bem-vindo (a) a sua nova vida. Uma jornada repleta de
              aventuras e desafios espera por você no Axie Infinity através da
              Rimuru Tempest Scholarship.
            </p>
            <p>
              Jogue sem custo inicial em uma comunidade plenamente colaborativa,
              recebendo um treinamento, suporte e ainda sendo recompensado com
              criptomoedas executando atividade in-game.
            </p>
          </Content>
          <Content>
            <Icon>
              <FaFileContract />
            </Icon>
            <h1>Como se inscrever?</h1>
            <p>
              Basta entrar no DISCORD da Axie Infinity Rimuru Tempest
              Scholarship, preencher o formulário e ficar na fila de espera.
            </p>
            <p>
              Há novas Pools mensalmente, então entre para a lista de espera
              agora mesmo!
            </p>
          </Content>
          <Content>
            <Icon>
              <FaTrophy />
            </Icon>
            <h1>Metas da academia</h1>
            <p>É necessário alcançar pelo menos 150 SLP´s diários.</p>
            <p>
              A primeira semana será utilizada para balanceamento e evolução dos
              Axies sendo pedido apenas 100 SLP´s por dia.
            </p>
            <p>
              Caso os jogadores iniciantes não atinjam este valor, poderão ser
              afastados da Academia abrindo assim uma nova vaga.
            </p>
          </Content>
        </Container>
        <StyledFlagButton>
          <p>
            Quero ser da
            <br />
            família Tempest!
          </p>
        </StyledFlagButton>
      </Wrapper>
      <Separator />
    </>
  );
}

export default TutorialSection;
