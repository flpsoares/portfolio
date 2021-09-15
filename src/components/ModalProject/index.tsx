/* eslint-disable no-unreachable-loop */
import {
  Box,
  BoxWrapper,
  CloseButton,
  Container,
  Description,
  OverlayBackdrop,
  OverlayBody,
  ProjectLink,
  SeePhotos,
  Technologies,
  TechnologiesUsed,
  Title,
  Image
} from './style'

import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { ModalCarousel } from '../ModalCarousel'

import { AnimatePresence } from 'framer-motion'
import { ProjectContext } from '../../contexts/ProjectContext'

export const ModalProject: React.FC = () => {
  const { closeModalProject, modalCarouselIsOpen, openModalCarousel } =
    useContext(ModalContext)

  const { name, link, description, images, technologies } =
    useContext(ProjectContext)

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
          <BoxWrapper>
            <TechnologiesUsed>
              {technologies.map((technology, index) => {
                return <Technologies key={index} children={technology.name} />
              })}
            </TechnologiesUsed>
            <Description>{description}</Description>
          </BoxWrapper>
          {link ? (
            <ProjectLink target="_blank" href={link}>
              Visite o site
            </ProjectLink>
          ) : (
            <SeePhotos onClick={openModalCarousel}>
              <p>Ver imagens</p>
              <Image src={images[1].url} alt={images[1].filename} />
            </SeePhotos>
          )}
          <CloseButton onClick={closeModalProject}>
            <MdClose size="26" />
          </CloseButton>
        </Box>
      </OverlayBody>
    </Container>
  )
}
