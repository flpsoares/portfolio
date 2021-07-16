import { Header } from '../components/Header'
import { Projects } from '../components/Projects'

import { Container } from '../styles/home'

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Projects />
    </Container>
  )
}

export default Home
