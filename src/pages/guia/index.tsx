import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Video from '../../components/Video';

import {
  Hero,
  HeroContainer,
  HeroImg,
  Main,
  BeAMember,
  Separator,
  BlueMain,
} from '../../styles/pages/Guide';
import FlagButton from '../../components/FlagButton';

function Guia() {
  return (
    <>
      <Header />
      <Hero>
        <HeroContainer>
          <h1>Bem-vindo!</h1>
          <h2>
            É possível você ganhar dinheiro e fazer amigos jogando Axie
            Infinity. Lute contra monstrinhos Axies na aventura, ganhe duelos
            contra outros jogadores dentro da arena, some o máximo de troféus,
            suba no ranking e converta todos os seus na sua moeda local.
            <br />
            <br />
            Uma divertida aventura para você ganhar dinheiro como nunca sonhou
            antes!
          </h2>
          <HeroImg src="/guide/hero/rimuru-guia.png" alt="Rimuru" />
        </HeroContainer>
      </Hero>
      <Main>
        <h1>Primeiros Passos</h1>
        <p>Onde vai cair o dinheiro que você ganhar com o jogo?</p>
        <p>
          Você precisa configurar toda a parte financeira para conseguir retirar
          o dinheiro ganho, por isso você precisará criar uma conta nos
          seguintes locais: Binance, Metamask e Ronin Wallet.
        </p>
        <Video
          position="center"
          title="Guia Axie Infinity: Do 0 Ao Saque"
          youtubeId="kxkJqNvLCPo"
        >
          <p>
            O depósito de fundos é na maioria das vezes a grande dúvida das
            pessoas que querem começar a jogar Axie Infinity, afinal é algo
            relativamente novo e boa parte das pessoas não conhecem como
            funcionam os games de NFT e o ecossistema de criptomoedas.
          </p>
        </Video>
        <Video
          position="right"
          title="Por que jogar Axie Infinity | Como Escolher um Time"
          youtubeId="o4NkZMa17dw"
        >
          <p>
            A dúvida sobre como o Marketplace (mercado do Axie Infinity)
            funciona não é de hoje, muito menos sobre os atributos dos seus
            Axies e o básico sobre SLP (Smooth Love Potion) que é um token
            farmavél que o Axie Infinity dá a você só por jogá-lo.
          </p>
          <p>Saiba agora como escolher seu time!</p>
        </Video>
        <Video
          position="left"
          title="Conhecendo o Hub - Aprenda a montar sua composição"
          youtubeId="O3jKT0XLPc0"
        >
          <p>
            Saiba cada parte do hub do jogo e monte sua composição ideal para
            conseguir resultados incríveis no Axie Infinity.
          </p>
        </Video>
      </Main>
      <Separator />
      <BlueMain>
        <Video
          position="right"
          title="Conhecendo o modo aventura"
          youtubeId="GLDoyL2aNJU"
        >
          <p>
            A dúvida sobre como o modo aventura do Axie Infinity funciona e qual
            fase se estabelecer pra ganhar mais slp/xp é muito comum. Então,
            tire todas as suas dúvidas agora mesmo!
          </p>
        </Video>
        <Video position="left" title="Modo arena" youtubeId="GLDoyL2aNJU">
          <p>
            O modo Arena é uma plataforma de multijogador onde os usuários se
            digladiam entre si em busca da vitória. Cada vitória lhe garante
            SLP’s de acordo com a sua colocação no ranking, ou seja, de acordo
            com o número de troféus que você já conquistou
          </p>
          <p>
            Quanto maior a sua classificação maior serão os seus ganhos, por
            isso, saiba agora como conquistar mais duelos e garantir cada vez
            mais SLP’s
          </p>
        </Video>
      </BlueMain>
      <Separator />
      <BeAMember>
        <h1>
          SEJA UM MEMBRO DA AXIE SCHOLARSHIP E FAÇA PARTE DE UMA DE NOSSAS
          FEDERAÇÕES
        </h1>
        <div>
          <img src="/guide/rimuru-l.png" alt="Rimuru" />
          <FlagButton>Saiba Mais</FlagButton>
          <img src="/guide/rimuru-r.png" alt="Rimuru" />
        </div>
      </BeAMember>
      <Footer />
    </>
  );
}

export default Guia;
