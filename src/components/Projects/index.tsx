import { Project } from '../Project'
import { ProjectModal } from '../ProjectModal'
import { Container, ProjectArea, Title } from './style'

import { useContext } from 'react'

import { ModalContext } from '../../contexts/ModalContext'

export const Projects: React.FC = () => {
  const { modalProjectIsOpen } = useContext(ModalContext)

  return (
    <Container>
      <Title>Projetos</Title>
      {modalProjectIsOpen && <ProjectModal />}
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
