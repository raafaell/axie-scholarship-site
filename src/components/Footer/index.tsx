import { FaDiscord, FaYoutube, FaInstagram, FaTwitch } from 'react-icons/fa';

import { Wrapper, Content, Info, SocialList } from './styles';

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <Wrapper className={className}>
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
            <a>
              <FaDiscord />
            </a>
            <a>
              <FaYoutube />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
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
