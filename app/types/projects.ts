export interface Project {
  title: string
  description: string
  shortDescription?: string
  date: string
  technologies: string[]
  link: string
  github?: string
  image: string
  featured?: boolean
}