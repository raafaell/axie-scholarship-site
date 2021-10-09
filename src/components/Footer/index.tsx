import { FaDiscord, FaYoutube, FaInstagram, FaTwitch } from 'react-icons/fa';

import { Wrapper, Content, Info, SocialList } from './styles';

function Footer() {
  return (
    <Wrapper>
      <Content>
        <img src="/footer/logo-ext.png" alt="Axie Scholarship Rimuru Tempest" />
        <Info>
          <h1>Info</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl auctor
            nunc in blandit aliquam eget. Sed mauris sit risus, risus, diam
            lectus nibh.
          </p>
          <SocialList>
            <a
              href="https://discord.gg/juqU2HYdXc"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://www.youtube.com/channel/UCm_ljG-jQl_XHaQUB1s_dNQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/axiescholarship/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitch.tv/axiescholarship"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitch />
            </a>
          </SocialList>
        </Info>
        <Info>
          <h1>Sitemap</h1>
          <a>Primeiro link texto longo</a>
          <a>Segundo link texto longo</a>
          <a>Terceiro link texto longo</a>
          <a>Quarto link texto longo</a>
          <a>Quinto link texto longo</a>
        </Info>
        <Info>
          <h1>Sitemap</h1>
          <a>Primeiro link texto longo</a>
          <a>Segundo link texto longo</a>
          <a>Terceiro link texto longo</a>
          <a>Quarto link texto longo</a>
          <a>Quinto link texto longo</a>
        </Info>
      </Content>
    </Wrapper>
  );
}

export default Footer;
