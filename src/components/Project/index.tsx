import { Button, Container, Description, Infos, Title } from './style'

import Image from 'next/image'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

export const Project: React.FC<App.Project> = ({ name, description, images }) => {
  const { openModalProject } = useContext(ModalContext)

  return (
    <Container>
      <Image
        src={images[0]?.url ? images[0].url : '/assets/mydiary1.png'}
        objectFit="cover"
        alt="mydiary1"
        width={300}
        height={200}
      />
      <Infos>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button onClick={openModalProject}>Ver detalhes</Button>
      </Infos>
    </Container>
  )
}
