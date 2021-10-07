import { Wrapper, Content } from './styles';

interface ContactSectionProps {}

function ContactSection({}: ContactSectionProps) {
  return (
    <Wrapper>
      <h1>Faça parte!</h1>
      <Content>
        <img src="/section/contact/rimuru-mailer.png" alt="Fale com a gente!" />
        <form action="">
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="E-mail" />
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Wrapper>
  );
}

export default ContactSection;
