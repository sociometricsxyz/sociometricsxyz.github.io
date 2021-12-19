import { createGlobalStyle } from "styled-components";
import breakpoint from "styled-components-breakpoint";

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    
    body {
    font-family: ${({ theme }) => theme.fontFamily.primary}, sans-serif;
    background: #FFF;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
    line-height: normal;
      font-size: 16px;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }
  
    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
    
    @font-face {
      font-family: "Baloo2";
      src: url("/static/fonts/Baloo2/Baloo2-Regular.ttf");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Baloo2";
      src: url("/static/fonts/Baloo2/Baloo2-Bold.ttf");
      font-style: normal;
      font-weight: 600;
      font-display: swap;
    }

  .container {
    max-width: ${({ theme }) => theme.breakpoints.xl}px;
    margin: 0 0.5rem;
    position: relative;
    width: calc(100% - 1rem);
  
    ${breakpoint("xl")`
      margin: auto;
    `};
  }
  
  .fade-enter {
    opacity: 0;
    }
    
    .fade-enter-active {
        opacity: 1;
        transition: opacity 200ms;
    }
    
    .fade-exit {
        opacity: 1;
    }
    
    .fade-exit-active {
        opacity: 0;
        transition: opacity 200ms;
    }
`;

export default GlobalStyle;
