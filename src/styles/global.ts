import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif;
  }

  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
  }

  html {
    background: var(--dark-primary);
    color: var(--text-primary);
  }

  ul {
    list-style: none;
    line-height: 40px;
  }

  a {
    text-decoration: none;
    color: var(--text-primary);

    cursor: pointer;

    font-size: 22px;
    font-weight: 500;
  }

  :root {
    --dark-primary: rgb(13,16,17);
    --dark-secondary: rgb(22,25,30);
    --text-primary: #c9d1d9;
    --primary: #6451CE;
    --secondary: #4834B8;
    --tertiary: #382990;
    --quaternary: #291D69;
  }

  ::-webkit-scrollbar {
      width: 10px;
    }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
    border-radius: 10px;
    &:hover {
      background: var(--tertiary);
    }
  }

  .rec-dot {
    background-color: transparent !important;
    opacity: 50% !important;
    box-shadow: 0 0 1px 3px var(--secondary) !important;
  }
  .rec-dot_active {
    background-color: white !important;
    opacity: 100% !important;
    box-shadow: 0 0 1px 3px var(--secondary) !important;
  }
  .rec.rec-arrow {
    background: transparent !important;
  }
  .rec.rec-arrow:hover {
    background: var(--secondary) !important;
    color: var(--text-primary) !important;
  }
  .rec.rec-arrow:hover:disabled, .rec.rec-arrow:focus:disabled {
    background: transparent !important;
    color: transparent !important;
  }
`
