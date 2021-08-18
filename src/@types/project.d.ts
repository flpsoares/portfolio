declare namespace App {
  export interface Project extends App.Model {
    name: string
    link?: string | null
    description: string
    images?: App.Image[]
    technologies?: App.Technology[]
  }
}
