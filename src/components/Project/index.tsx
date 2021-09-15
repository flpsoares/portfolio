import { Button, Container, Description, Infos, Title, Image } from './style'

import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { ProjectContext } from '../../contexts/ProjectContext'

export const Project: React.FC<App.Project> = ({
  name,
  link,
  description,
  images,
  technologies
}) => {
  const { openModalProject } = useContext(ModalContext)
  const { GetProjectInfo } = useContext(ProjectContext)

  const handleClick = () => {
    openModalProject()
    GetProjectInfo(name, link, description, images, technologies)
  }

  return (
    <Container>
      <Image
        src={images[0]?.url ? images[0].url : '/assets/project-image.svg'}
        alt={images[0]?.filename ? images[0].filename : 'project'}
      />
      <Infos>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button onClick={handleClick}>Ver detalhes</Button>
      </Infos>
    </Container>
  )
}
