import { Container, OverlayBackdrop, OverlayBody } from './style'

import Carousel from 'react-elastic-carousel'
import Image from 'next/image'

export const ModalCarousel: React.FC = () => {
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
      </OverlayBackdrop>
    </Container>
  )
}
