import { useState, useCallback, useEffect } from 'react';

import Header from '../../components/Header';

import {
  Hero,
  HeroContainer,
  HeroImg,
  Main,
  PlansSection,
  PlansContainer,
  Plan,
  CardsContainer,
  PlanButton,
  Currency,
  StyledFooter,
} from '../../styles/pages/Investors';

interface BinanceResponseProps {
  symbol: string;
  price: string;
}

export default function Investors() {
  const [usdCurrency, setUSDCurrency] = useState(9.29);
  const [ethCurrency, setETHCurrency] = useState(0.0019);

  const delay = useCallback(delayInms => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }, []);

  const getSlpCurrency = useCallback(
    async (coin: 'BUSD' | 'ETH') => {
      try {
        const response = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=SLP${coin}`,
        );

        const parsedResponse = (await response.json()) as BinanceResponseProps;

        const typedNumber = Number(parsedResponse.price);

        const slpAmount = 120;

        const currency = typedNumber * slpAmount;

        switch (coin) {
          case 'BUSD':
            setUSDCurrency(Number(currency.toFixed(2)));
            break;
          case 'ETH':
            setETHCurrency(Number(currency.toFixed(4)));
            break;
        }
      } catch {
        return;
      }

      await delay(2000);

      getSlpCurrency(coin);
    },
    [delay],
  );

  useEffect(() => {
    getSlpCurrency('BUSD');
    getSlpCurrency('ETH');
  }, [getSlpCurrency]);

  return (
    <>
      <Header />
      <Hero>
        <HeroContainer>
          <h1>O Grande Investimento do Século 21</h1>
          <h2>
            Escolha a Federação que vai Render Milhares de Dólares para você
            todos os meses Sem Nenhum Esforço – A Renda Passiva Mais Lucrativa
            que você já viu!
          </h2>
          <HeroImg
            src="/investors/hero/rimuru-l.png"
            alt="Rimuru"
            side="left"
          />
          <HeroImg
            src="/investors/hero/rimuru-r.png"
            alt="Rimuru"
            side="right"
          />
        </HeroContainer>
      </Hero>
      <Main>
        <h1>Quantas oportunidades você já perdeu?</h1>
        <p>
          Ações da bolsa de valores que tiveram 200% de valorização, você
          aproveitou alguma? Você faz parte do grupo de pessoas que investiu uma
          migalha em alguma criptomoeda e hoje se tornou um milionário? Existem
          dois tipos de pessoas nesta vida: Os “Sortudos” e os “Caras Comuns”.
        </p>
        <p>
          A diferença entre essas duas pessoas não se trata de uma diferença de
          intelecto, capacidade ou até circunstância. A grande diferença, porém,
          reside na decisão. Os “sortudos” ficam atentos as ondas de expansão,
          aproveitam e executam as oportunidades. Já os “Caras Comuns” apenas
          seguem a manada, boiam e deixam as oportunidades passarem.
        </p>
        <p>
          Em toda geração sempre vai haver esses dois grupos de pessoas. Neste
          exato momento há estes dois grupos de pessoas lendo esse texto.
        </p>

        <h1>
          O Seu Futuro Pode Ser Muito Mais Rentável Com A Axie Scholarship
        </h1>
        <p>
          Como você imagina o seu futuro? Você vai ser a pessoa que todos vão
          chamar de “Sortudo” porque nadou nas oportunidades e aproveitou as
          fontes de lucro.
        </p>
        <p>Ou...</p>
        <p>
          Daqui uns 20 anos será apenas mais um cara comum, com uma vida comum
          inundada de oportunidades perdidas. Qual vai ser?
        </p>
        <p>
          Se você assim como eu está interessado em ser visto como um “sortudo”,
          então preste bastante atenção nas próximas linhas. Há uma grande onda
          agora, as criptomoedas e aqueles que aproveitarem serão taxados de
          sortudos amanhã.
        </p>

        <h1>Como Funciona o Axie Infinity?</h1>
        <p>
          O Axie Infinity é um jogo de mercado descentralizado onde os famosos
          Axies são comercializados. A moeda de compra para negociar estes Axies
          é a Ethereum e já chegou a um mercado de mais de US$ 2,3 bilhões de
          capitalização.
        </p>
        <p>
          É uma economia global em que pessoas de diversos países trabalham
          jogando e tiram seus rendimentos do próprio jogo. Em alguns países o
          indivíduo lucra mais jogando do que trabalhando em um emprego
          convencional que lhe daria apenas um salário mínimo.
        </p>
        <p>
          Dentro do game há escolas para pessoas que desejam jogar sem comprar
          um Axie, esses jogadores então pagam as escolas com parte de seus
          rendimentos.
        </p>

        <h1>Como Investir?</h1>
        <p>
          Os investidores vão financiar alunos da Axie Scholarship. Esses alunos
          treinam para assumir as posições de superação em busca de rendimentos
          cada vez maiores em um ambiente saudável e colaborativo.
        </p>
        <p>
          A Axie Scholarship eleva seus jogadores (nossos alunos) para altas
          posições nesta economia digital do século 21. Hoje nós temos mais de
          40 alunos jogando pela nossa escola.
        </p>
        <p>
          E você pode fazer parte desse time através de um investimento com
          retorno acima do esperado em qualquer mercado, seja de criptomoedas ou
          não.
        </p>
      </Main>
      <PlansSection>
        <PlansContainer>
          <Plan side="left">
            <h1>Starter</h1>
            <ul>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>Investimento: 1,35 Ethereum</p>
              </li>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>Rendimento Fixo: 120 SLP por dia</p>
              </li>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>Faturamento: 45.200 SLP no ano</p>
              </li>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>SOMENTE 5 VAGAS</p>
              </li>
            </ul>
            <CardsContainer side="left">
              <PlanButton color="purple">Seja um Investidor Agora</PlanButton>
            </CardsContainer>
          </Plan>
          <Plan side="right">
            <h1>Exclusivo</h1>
            <ul>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>Investimento: 4,35 Ethereum</p>
              </li>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>
                  Rendimentos: Na primeira semana a você vai receber 120 SLP por
                  dia; na segunda semana 240 SLP por dia; na terceira semana 360
                  SLP por dia.
                </p>
                <p>
                  A partir da quarta semana do primeiro mês o investimento
                  começa a render 480 SLP por dia. Rendendo{' '}
                  <strong>14.400 SLP no primeiro mês.</strong>
                </p>
                <p>A partir da 5 semana (segundo mês) 600 SLP por dia</p>
              </li>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>Faturamento: 200.000 SLP no ano</p>
              </li>
              <li>
                <img src="/investors/plans/slp.png" alt="SLP" />
                <p>VAGA EXCLUSIVA PARA INVESTIDOR</p>
              </li>
            </ul>
            <CardsContainer side="right">
              <PlanButton color="green">
                Quero ser Investidor Exclusivo
              </PlanButton>
            </CardsContainer>
          </Plan>
          <Currency>
            <h1>
              120 SLP agora:
              <br />
              {usdCurrency} USD || {ethCurrency} ETH
            </h1>
          </Currency>
        </PlansContainer>
        <img src="/investors/plans/clouds.png" alt="Núvens" />
      </PlansSection>
      <StyledFooter />
    </>
  );
}
