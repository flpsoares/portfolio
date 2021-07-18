import { Project } from '../Project'
import { ModalProject } from '../ModalProject'
import { Container, ProjectArea, Title } from './style'

import { useContext } from 'react'

import { ModalContext } from '../../contexts/ModalContext'

import { AnimatePresence } from 'framer-motion'

export const Projects: React.FC = () => {
  const { modalProjectIsOpen } = useContext(ModalContext)

  return (
    <Container>
      <Title>Projetos</Title>
      <AnimatePresence>{modalProjectIsOpen && <ModalProject />}</AnimatePresence>
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
