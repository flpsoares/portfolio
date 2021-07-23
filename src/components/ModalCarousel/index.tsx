import { CloseButton, Container, OverlayBackdrop, OverlayBody } from './style'

import Carousel from 'react-elastic-carousel'
import Image from 'next/image'

import { MdClose } from 'react-icons/md'

import { ModalContext } from '../../contexts/ModalContext'
import { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'

export const ModalCarousel: React.FC = () => {
  const { closeModalCarousel } = useContext(ModalContext)

  const { images } = useContext(ProjectContext)

  console.log(images[0].url)

  return (
    <Container>
      <OverlayBackdrop>
        <OverlayBody
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <Carousel isRTL={false}>
            {images?.map((image) => {
              return (
                <Image
                  key={image.id}
                  src={image.url}
                  alt={image.filename}
                  objectFit="contain"
                  width="1400"
                  height="600"
                />
              )
            })}
          </Carousel>
        </OverlayBody>
        <CloseButton onClick={closeModalCarousel}>
          <MdClose size="36" />
        </CloseButton>
      </OverlayBackdrop>
    </Container>
  )
}
