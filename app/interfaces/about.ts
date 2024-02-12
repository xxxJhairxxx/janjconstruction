import { Picture } from './shared'

export interface About {
  data: AboutData
}

export interface AboutData {
  id: number
  subtitle: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  description_one: string
  description_two: string
  banner_img: Picture
  img: Picture
  img2: Picture
}
