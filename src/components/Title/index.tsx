import { Container } from './style'

export const Title: React.FC = ({ children }) => {
  return (
    <Container>
      <span children="<"></span>
      {children}
      <span children=" />"></span>
    </Container>
  )
}
