declare namespace App {
  export interface Project extends App.Model {
    name: string
    description: string
    images?: App.Image[]
  }
}
