import { Project } from '../Project'
import { ModalProject } from '../ModalProject'
import { Container, ProjectArea, Title } from './style'

import { useContext, useState, useEffect, SetStateAction } from 'react'

import { ModalContext } from '../../contexts/ModalContext'

import { AnimatePresence } from 'framer-motion'
import ProjectApi from '../../services/api/ProjectApi'

export const Projects: React.FC = () => {
  const { modalProjectIsOpen } = useContext(ModalContext)

  const [projects, setProjects] = useState<App.Project[]>([])

  useEffect(() => {
    ProjectApi.list().then((res) => setProjects(res))
  }, [])

  return (
    <Container>
      <Title>Projetos</Title>
      <AnimatePresence>{modalProjectIsOpen && <ModalProject />}</AnimatePresence>
      <ProjectArea>
        {projects?.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              images={project.images}
            />
          )
        })}
      </ProjectArea>
    </Container>
  )
}
