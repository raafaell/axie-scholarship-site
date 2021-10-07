import Checkpoint from '../Checkpoint';

import { Wrapper, Checkpoints } from './styles';

function RoadmapSection() {
  return (
    <Wrapper>
      <h1>Está Perdido?</h1>
      <h2>
        Um novo universo com novas experiência espera por você. Saiba onde já
        chegamos e para onde estamos indo:
      </h2>
      <Checkpoints>
        <Checkpoint
          side="left"
          dateString="01/06"
          imgSource="/section/roadmap/pin-2.png"
          imgType="pin"
        >
          Criação do Discord da escolinha
        </Checkpoint>
        <Checkpoint
          side="right"
          dateString="06/06"
          imgSource="/section/roadmap/rimuru-1.png"
          imgType="rimuru"
        >
          Nomeação da fase 1 (primeira turma de 20 alunos)
        </Checkpoint>
        <Checkpoint
          side="left"
          dateString="11/07"
          imgSource="/section/roadmap/rimuru-2.png"
          imgType="rimuru"
        >
          Nomeação da fase 2 (segunda turma de 24 alunos)
        </Checkpoint>
        <Checkpoint
          side="right"
          dateString="13/07"
          imgSource="/section/roadmap/pin-1.png"
          imgType="pin"
        >
          Entrega total dos times da fase 1
        </Checkpoint>
        <Checkpoint
          side="left"
          dateString="18/07"
          imgSource="/section/roadmap/pin-3.png"
          imgType="pin"
        >
          Abertura da Dinastia Sarion (nova turma com 20 alunos)
        </Checkpoint>
        <Checkpoint
          side="right"
          dateString="08/08"
          imgSource="/section/roadmap/rimuru-3.png"
          imgType="rimuru"
        >
          Entrega total dos times da Dinastia Sarion
        </Checkpoint>
        <Checkpoint
          side="left"
          dateString="Final de Agosto"
          imgSource="/section/roadmap/pin-4.png"
          imgType="pin"
        >
          Entrega total dos times da fase 2
        </Checkpoint>
        <Checkpoint
          side="right"
          dateString="Agosto/Setembro"
          imgSource="/section/roadmap/pin-1.png"
          imgType="pin"
        >
          Atualização dos times da escolinha
        </Checkpoint>
        <Checkpoint
          side="left"
          dateString="Final de Setembro"
          imgSource="/section/roadmap/pin-2.png"
          imgType="pin"
        >
          Abertura de novas 15 vagas
        </Checkpoint>
        <Checkpoint
          side="right"
          dateString="Outubro"
          imgSource="/section/roadmap/pin-1.png"
          imgType="pin"
        >
          Compra de Lands no Axie Infinity para a guilda
        </Checkpoint>
        <Checkpoint
          side="left"
          dateString="Novembro"
          imgSource="/section/roadmap/rimuru-4.png"
          imgType="rimuru"
        >
          Abertura de novas turmas e scholars
        </Checkpoint>
        <Checkpoint
          side="right"
          dateString="Outubro/Novembro"
          imgSource="/section/roadmap/rimuru-5.png"
          imgType="rimuru"
        >
          Abertura de uma nova federação (vaga para investidores)
        </Checkpoint>
      </Checkpoints>
    </Wrapper>
  );
}

export default RoadmapSection;
