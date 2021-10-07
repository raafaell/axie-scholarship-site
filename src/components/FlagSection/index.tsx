import { Wrapper, Container, Side, Content } from './styles';

function FlagSection() {
  return (
    <Wrapper>
      <Container>
        <Side side="top" />
        <Content>
          <h1>Uma Comunidade para Todos</h1>
          <p>
            O respeito é a nossa regra, comprometimento com um ambiente saudável
            e próspero é a nossa missão.
          </p>
          <p>
            Todos os alunos e colaboradores da Rimuru Tempest Scholarship devem
            estar comprometidos com o ideal da escola.
          </p>
          <p>Não é nosso interesse os gananciosos.</p>
          <p>
            Esta é uma comunidade colaborativa em que há crescimento mútuo, uma
            comunidade forte através de indivíduos fortes.
          </p>
          <p>
            Portanto, é preciso respeitar a sistemática e os valores da escola.
          </p>
        </Content>
        <Side side="bottom" />
      </Container>
    </Wrapper>
  );
}

export default FlagSection;
