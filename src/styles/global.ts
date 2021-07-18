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

  :root {
    --dark-primary: rgb(17, 17, 17);
    --dark-secondary: rgb(25, 25, 25);
    --text-primary: #c9d1d9;
    --primary: #420F56;
    --secondary: #591F6F;
    --tertiary: #6F3287;
    --quaternary: #83459E;
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
