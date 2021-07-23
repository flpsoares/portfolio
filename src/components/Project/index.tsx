import { Button, Container, Description, Infos, Title } from './style'

import Image from 'next/image'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { ProjectContext } from '../../contexts/ProjectContext'

export const Project: React.FC<App.Project> = ({ name, description, images }) => {
  const { openModalProject } = useContext(ModalContext)
  const { GetProjectInfo } = useContext(ProjectContext)

  const handleClick = () => {
    openModalProject()
    GetProjectInfo(name, description, images)
  }

  return (
    <Container>
      <Image
        src={images[0].url}
        objectFit="cover"
        alt="mydiary1"
        width={300}
        height={200}
      />
      <Infos>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button onClick={handleClick}>Ver detalhes</Button>
      </Infos>
    </Container>
  )
}
