import {
  Box,
  CloseButton,
  Container,
  Description,
  OverlayBackdrop,
  OverlayBody,
  Photobook,
  PhotoBox,
  SeeMoreButton,
  Spotlight,
  Title
} from './style'

import Image from 'next/image'
import { useEffect } from 'react'
import { MdClose } from 'react-icons/md'

import { disableScroll } from '../../utils/handleScroll'

export const ProjectModal: React.FC = () => {
  useEffect(() => {
    disableScroll()
  }, [])

  return (
    <Container>
      <OverlayBackdrop />
      <OverlayBody>
        <Box>
          <Title>MyDiary</Title>
          <PhotoBox>
            <Spotlight>
              <Image
                src="/assets/mydiary1.png"
                alt="mydiary1"
                width="500"
                height="411"
              />
            </Spotlight>
            <Photobook>
              <Image
                src="/assets/mydiary1.png"
                alt="mydiary1"
                width="500"
                height="400"
              />
              <Image
                src="/assets/mydiary1.png"
                alt="mydiary1"
                width="500"
                height="400"
              />
              <Image
                src="/assets/mydiary1.png"
                alt="mydiary1"
                width="500"
                height="400"
              />
              <SeeMoreButton>
                <p>Ver mais 5</p>
                <Image src="/assets/mydiary1.png" alt="mydiary1" layout="fill" />
              </SeeMoreButton>
            </Photobook>
            <Description>
              Uma rede social moderna que possibilita a postagem de textos e fotos.
            </Description>
          </PhotoBox>
          <CloseButton>
            <MdClose size="26" />
          </CloseButton>
        </Box>
      </OverlayBody>
    </Container>
  )
}
