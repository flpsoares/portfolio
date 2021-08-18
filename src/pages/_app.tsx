import GlobalStyle from '../styles/global'

import { ModalProvider } from '../contexts/ModalContext'
import { ProjectProvider } from '../contexts/ProjectContext'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <ProjectProvider>
        <Head>
          <title>Filipe Soares Desenvolvedor Web Fullstack</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ProjectProvider>
    </ModalProvider>
  )
}

export default MyApp
