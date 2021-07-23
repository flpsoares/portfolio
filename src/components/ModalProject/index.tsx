/* eslint-disable no-unreachable-loop */
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
import { ModalCarousel } from '../ModalCarousel'

import { AnimatePresence } from 'framer-motion'
import { ProjectContext } from '../../contexts/ProjectContext'

export const ModalProject: React.FC = () => {
  const { closeModalProject, modalCarouselIsOpen, openModalCarousel } =
    useContext(ModalContext)

  const { name, description, images } = useContext(ProjectContext)

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
      <AnimatePresence>{modalCarouselIsOpen && <ModalCarousel />}</AnimatePresence>
      <OverlayBackdrop />
      <OverlayBody onClick={closeModalClickingInOverlay}>
        <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
          <Title>{name}</Title>
          <PhotoBox>
            <Spotlight>
              <Image
                src={images[0].url}
                alt={images[0].filename}
                objectFit="contain"
                width="500"
                height="411"
              />
            </Spotlight>
            <Photobook>
              <Image
                src={images[1].url}
                alt={images[1].filename}
                width="500"
                height="400"
              />
              <Image
                src={images[2].url}
                alt={images[2].filename}
                width="500"
                height="400"
              />
              <Image
                src={images[3].url}
                alt={images[3].filename}
                width="500"
                height="400"
              />
              <SeeMoreButton onClick={openModalCarousel}>
                <p>Ver todas</p>
                <Image src={images[4].url} alt={images[4].filename} layout="fill" />
              </SeeMoreButton>
            </Photobook>
            <Description>{description}</Description>
          </PhotoBox>
          <CloseButton onClick={closeModalProject}>
            <MdClose size="26" />
          </CloseButton>
        </Box>
      </OverlayBody>
    </Container>
  )
}
