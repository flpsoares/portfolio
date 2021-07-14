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
    --dark-secondary: rgb(40, 40, 40);
    --text-primary: #c9d1d9;
    --primary: #420F56;
    --secondary: #591F6F;
    --tertiary: #6F3287;
    --quaternary: #83459E;
  }
`
