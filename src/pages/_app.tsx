import GlobalStyle from '../styles/global'

import { ModalProvider } from '../contexts/ModalContext'
import { ProjectProvider } from '../contexts/ProjectContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <ProjectProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ProjectProvider>
    </ModalProvider>
  )
}

export default MyApp
