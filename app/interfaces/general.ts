import { Logo } from './shared'

export interface General {
  data: GeneralData
}

export interface GeneralData {
  id: number
  address: string
  email: string
  phone: string
  facebook_id: string
  pixel_facebook: string
  tag_manager: string
  google_analytics: string
  yandex_code: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  google_ads: string
  address_url: string
  logo: Logo[]
  social_networks: SocialNetworks[]
}

export interface SocialNetworks {
  id: number
  type: string
  url: string
}
