import { Button, Container, Description, Infos, Title } from './style'

import Image from 'next/image'

export const Project: React.FC = () => {
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
        <Button>Ver fotos</Button>
      </Infos>
    </Container>
  )
}
