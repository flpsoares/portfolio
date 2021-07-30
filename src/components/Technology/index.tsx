import { Container, Title, ImageArea } from './style'

import Image from 'next/image'

interface TechnologyProps {
  title: string
  url: string
  alt: string
}

export const Technology: React.FC<TechnologyProps> = ({ title, url, alt }) => {
  return (
    <Container id="technology">
      <ImageArea>
        <Image src={url} objectFit="cover" alt={alt} layout="fill" />
      </ImageArea>
      <Title>{title}</Title>
    </Container>
  )
}
