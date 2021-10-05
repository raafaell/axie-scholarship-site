import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (max-width: 414px) {
      font-size: 15px;
    }
  }


  body {
    color: ${props => props.theme.colors.main.default};
    font-family: ${props => props.theme.fonts.serif}, sans-serif;
    font-weight: 400;
  }

  input, textarea, button {
    font-family: ${props => props.theme.fonts.serif}, sans-serif;
  }

  button, a {
    cursor: pointer;
    transition: all 0.2s;
  }
`;
