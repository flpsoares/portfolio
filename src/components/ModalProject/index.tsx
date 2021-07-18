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
import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

export const ModalProject: React.FC = () => {
  const { closeModalProject } = useContext(ModalContext)

  function closeModalClickingInOverlay(e) {
    if (e.currentTarget === e.target) {
      closeModalProject()
    }
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OverlayBackdrop />
      <OverlayBody onClick={closeModalClickingInOverlay}>
        <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
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
          <CloseButton onClick={closeModalProject}>
            <MdClose size="26" />
          </CloseButton>
        </Box>
      </OverlayBody>
    </Container>
  )
}
