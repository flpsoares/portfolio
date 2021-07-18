import { CloseButton, Container, OverlayBackdrop, OverlayBody } from './style'

import Carousel from 'react-elastic-carousel'
import Image from 'next/image'

import { MdClose } from 'react-icons/md'

import { ModalContext } from '../../contexts/ModalContext'
import { useContext } from 'react'

export const ModalCarousel: React.FC = () => {
  const { closeModalCarousel } = useContext(ModalContext)

  return (
    <Container>
      <OverlayBackdrop>
        <OverlayBody>
          <Carousel isRTL={false}>
            <Image
              src="/assets/mydiary1.png"
              alt="mydiary1"
              objectFit="contain"
              width="1400"
              height="600"
            />
            <Image
              src="/assets/mydiary1.png"
              alt="mydiary1"
              objectFit="contain"
              width="1400"
              height="600"
            />
          </Carousel>
        </OverlayBody>
        <CloseButton onClick={closeModalCarousel}>
          <MdClose size="36" />
        </CloseButton>
      </OverlayBackdrop>
    </Container>
  )
}
