import { createContext, ReactNode, useState } from 'react'

interface ProjectContextData {
  name: string
  description: string
  images: App.Image[]
  GetProjectInfo: (name: string, description: string, images: App.Image[]) => void
}

interface ProjectProviderProps {
  children: ReactNode
}

export const ProjectContext = createContext({} as ProjectContextData)

export function ProjectProvider({ children }: ProjectProviderProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<App.Image[]>()

  const GetProjectInfo = (
    name: string,
    description: string,
    images: App.Image[]
  ) => {
    setName(name)
    setDescription(description)
    setImages(images)
  }

  return (
    <ProjectContext.Provider value={{ name, description, images, GetProjectInfo }}>
      {children}
    </ProjectContext.Provider>
  )
}
