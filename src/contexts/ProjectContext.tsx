import { createContext, ReactNode, useState } from 'react'

interface ProjectContextData {
  name: string
  link: string | null
  description: string
  images: App.Image[]
  technologies: App.Technology[]
  GetProjectInfo: (
    name: string,
    link: string | null,
    description: string,
    images: App.Image[],
    technologies: App.Technology[]
  ) => void
}

interface ProjectProviderProps {
  children: ReactNode
}

export const ProjectContext = createContext({} as ProjectContextData)

export function ProjectProvider({ children }: ProjectProviderProps) {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<App.Image[]>()
  const [technologies, setTechnologies] = useState<App.Technology[]>()

  const GetProjectInfo = (
    name: string,
    link: string | null,
    description: string,
    images: App.Image[],
    technologies: App.Technology[]
  ) => {
    setName(name)
    setLink(link)
    setDescription(description)
    setImages(images)
    setTechnologies(technologies)
  }

  return (
    <ProjectContext.Provider
      value={{ name, link, description, images, technologies, GetProjectInfo }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
