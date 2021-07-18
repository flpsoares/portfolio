import { useState, ReactNode, createContext } from 'react'
import { disableScroll, enableScroll } from '../utils/handleScroll'

interface ModalContextData {
  modalProjectIsOpen: boolean
  openModalProject: () => void
  closeModalProject: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalProjectIsOpen, setModalProjectIsOpen] = useState(false)

  const openModalProject = () => {
    disableScroll()
    setModalProjectIsOpen(true)
  }

  const closeModalProject = () => {
    enableScroll()
    setModalProjectIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ modalProjectIsOpen, openModalProject, closeModalProject }}
    >
      {children}
    </ModalContext.Provider>
  )
}
