import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 4;

  position: fixed;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  padding: 0 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const OverlayBackdrop = styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`

export const OverlayBody = styled(Overlay)`
  overflow-y: auto;
  z-index: 6;
`

export const Box = styled(motion.div)`
  width: 60%;
  height: 85%;

  border-radius: 5px;
  padding: 24px;

  margin: auto;

  background: rgba(0, 0, 0, 0.7);

  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
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
