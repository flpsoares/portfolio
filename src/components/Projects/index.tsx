import { Project } from '../Project'
import { Container, ProjectArea, Title } from './style'

export const Projects: React.FC = () => {
  return (
    <Container>
      <Title>Projetos</Title>
      <ProjectArea>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectArea>
    </Container>
  )
}
