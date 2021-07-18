import { Button, Container, Description, Infos, Title } from './style'

import Image from 'next/image'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

export const Project: React.FC = () => {
  const { openModalProject } = useContext(ModalContext)

  return (
    <Container>
      <Image
        src="/assets/mydiary1.png"
        objectFit="cover"
        alt="mydiary1"
        width={300}
        height={200}
      />
      <Infos>
        <Title>MyDiary</Title>
        <Description>
          Uma rede social moderna que possibilita a postagem de textos e fotos.
        </Description>
        <Button onClick={openModalProject}>Ver detalhes</Button>
      </Infos>
    </Container>
  )
}
