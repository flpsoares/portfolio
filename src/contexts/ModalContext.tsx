import { useState, ReactNode, createContext } from 'react'
import { disableScroll, enableScroll } from '../utils/handleScroll'

interface ModalContextData {
  modalProjectIsOpen: boolean
  openModalProject: () => void
  closeModalProject: () => void
  modalCarouselIsOpen: boolean
  openModalCarousel: () => void
  closeModalCarousel: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalProjectIsOpen, setModalProjectIsOpen] = useState(false)
  const [modalCarouselIsOpen, setModalCarouselIsOpen] = useState(false)

  const openModalProject = () => {
    disableScroll()
    setModalProjectIsOpen(true)
  }

  const closeModalProject = () => {
    enableScroll()
    setModalProjectIsOpen(false)
  }

  const openModalCarousel = () => {
    setModalCarouselIsOpen(true)
  }

  const closeModalCarousel = () => {
    setModalCarouselIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        modalProjectIsOpen,
        openModalProject,
        closeModalProject,
        modalCarouselIsOpen,
        openModalCarousel,
        closeModalCarousel
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
