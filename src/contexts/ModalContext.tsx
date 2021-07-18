import { useState, ReactNode, createContext } from 'react'

interface ModalContextData {
  modalProjectIsOpen: boolean
  openProjectModal: () => void
  closeProjectModal: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalProjectIsOpen, setModalProjectIsOpen] = useState(false)

  const openProjectModal = () => {
    setModalProjectIsOpen(true)
  }

  const closeProjectModal = () => {
    setModalProjectIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ modalProjectIsOpen, openProjectModal, closeProjectModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
