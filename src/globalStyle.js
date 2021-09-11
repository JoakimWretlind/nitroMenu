import { createGlobalStyle } from 'styled-components';
import TypoOval from './assets/fonts/TypoOval.otf';

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'TypoOval';
    src: url(${TypoOval});
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    background: linear-gradient(-2deg, #E4E7EB, #FFFFFF);
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;