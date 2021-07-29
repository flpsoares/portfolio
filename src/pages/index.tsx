import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Projects } from '../components/Projects'
import { Space } from '../components/Space'
import { Technologies } from '../components/Technologies'

import { Container } from '../styles/home'

export const Home: React.FC = () => {
  return (
    <Container>
      <Space />
      <Header />
      <Projects />
      <Technologies />
      <Footer />
    </Container>
  )
}

export default Home
