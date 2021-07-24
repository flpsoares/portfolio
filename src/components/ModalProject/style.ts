import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const OverlayBackdrop = styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`

export const OverlayBody = styled(Overlay)`
  overflow-y: auto;
  z-index: 3;
`

export const Box = styled(motion.div)`
  width: 60%;
  max-height: 85%;
  /* min-height: 30%; */

  border-radius: 5px;
  padding: 24px;

  margin: auto;

  background: rgba(0, 0, 0, 0.7);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const Title = styled.h1``

export const PhotoBox = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 400px 1fr;
  grid-template-areas:
    'spotlight photobook'
    'description description';
`

export const Spotlight = styled.div`
  grid-area: spotlight;
`

export const Photobook = styled.div`
  grid-area: photobook;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 26px;

  margin-left: 20px;
`

export const SeeAllButton = styled.button`
  color: var(--secondary);
  font-size: 20px;
  font-weight: 600;

  border-radius: 5px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    z-index: 1;
    color: var(--text-primary);
    font-size: 20px;
    font-weight: 600;
    transition: filter 0.1s;
  }

  img {
    filter: brightness(0.2);
    transition: filter 0.1s;
  }

  &:hover {
    background: rgba(20, 20, 20, 0.2);
    p {
      filter: brightness(0.8);
    }
    img {
      filter: brightness(0.1);
    }
  }
`

export const Description = styled.h3`
  grid-area: description;

  margin-top: 50px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  color: var(--text-primary);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
