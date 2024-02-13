export interface Multilanguage {
  data: MultilanguageData
}

export interface MultilanguageData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  menu: Menu[]
  labels_buttons: LabelsButtons
  lbl_error_recaptcha: string
  lbl_service: string
}

export interface Menu {
  id: number
  label: string
  url: string
  sitemap: true
}

export interface LabelsButtons {
  id: number
  lbl_contact_us: string
  lbl_read_more: string
  lbl_send: string
  lbl_see_more: string
}
