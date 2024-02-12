import { Picture } from './shared'

export interface Home {
  data: HomeData
}

export interface HomeData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  home_banner: HomeBanner
  home_our_company: HomeOurCompany
  home_our_services: HomeOurServices
  home_middle: HomeMiddle
  home_we_work: HomeWeWork
}

export interface HomeBanner {
  id: number
  subtitle: string
  title: string
  img_mobile: Picture
  img_tablet: Picture
  img_laptop: Picture
}

export interface HomeOurCompany {
  id: number
  subtitle: string
  title: string
  text: string
  image:Picture
}

export interface HomeOurServices {
  id: number
  subtitle: string
  title: string
  text: string
  image: Picture
}

export interface HomeMiddle {
  id: number
  title: string
  image: Picture
}

export interface HomeWeWork {
  id: number
  subtitle: string
  title: string
  text: string
}
