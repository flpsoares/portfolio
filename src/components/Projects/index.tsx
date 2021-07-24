import { Project } from '../Project'
import { ModalProject } from '../ModalProject'
import { Container, ProjectArea, Title } from './style'

import { useContext, useState, useEffect } from 'react'

import { ModalContext } from '../../contexts/ModalContext'

import { AnimatePresence } from 'framer-motion'
import ProjectApi from '../../services/api/ProjectApi'

import Carousel from 'react-elastic-carousel'

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
      <Carousel outerSpacing={100} itemsToShow={3} isRTL={false}>
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
      </Carousel>
    </Container>
  )
}
