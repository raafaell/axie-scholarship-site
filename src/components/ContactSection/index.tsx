import { Wrapper, Content } from './styles';

function ContactSection() {
  return (
    <Wrapper>
      <h1>Gostaria de nos dizer algo?</h1>
      <Content>
        <img src="/section/contact/rimuru-mailer.png" alt="Fale com a gente!" />
        <form action="">
          <input type="text" name="message" placeholder="Digite sua mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Wrapper>
  );
}

export default ContactSection;
