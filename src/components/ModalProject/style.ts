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

  overflow: hidden;

  border-radius: 5px;
  padding: 24px;

  background: rgba(0, 0, 0, 0.7);

  position: relative;

  display: flex;
  flex-direction: column;
`

export const BoxWrapper = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 28px;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
`

export const Description = styled.h3``

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

export const TechnologiesUsed = styled.ul`
  line-height: 32px;
  list-style: disc;
`

export const Technologies = styled.li`
  font-weight: 600;
`

export const ProjectLink = styled.a`
  text-align: center;
  padding: 10px;

  color: #fff;
  transition: all 0.5s;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
`

export const SeePhotos = styled.button`
  color: var(--secondary);
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 160px;
  height: 160px;

  p {
    z-index: 1;
    color: var(--text-primary);
    font-size: 20px;
    font-weight: 600;
    transition: filter 0.1s;
  }

  img {
    filter: brightness(0.5);
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
