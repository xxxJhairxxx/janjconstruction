import { GeneralData, MultilanguageData } from '@/interfaces'
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface ControllerState {
  general: GeneralData
  multilanguage: MultilanguageData
  multilenguaje: MultilanguageData
}

const useGeneralsController = ({
  general,
  multilanguage,
  multilenguaje,
}: ControllerState): ControllerState => {
  const [generals, setGenerals] = useState({
    general,
    multilanguage,
    multilenguaje,
  })

  useEffect(() => {
    setGenerals({
      general,
      multilanguage,
      multilenguaje,
    })
  }, [])

  return {
    general: generals.general,
    multilanguage: generals.multilanguage,
    multilenguaje: generals.multilenguaje,
  }
}

const multi = {
  id: 3,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  label_company: '',
  label_privacity: '',
  label_read: '',
  locale: '',
  label_resource: '',
  text_articles: '',
  title_articles: '',
  section_cookies: {
    id: 1,
    text: '',
    label_info: '',
    label_accept: '',
  },
  section_banner_middle: {
    id: 7,
    text: '',
    img_desktop: {
      id: 1,
      name: '',
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: null,
      mime: null,
      size: 0,
      url: '',
      previewUrl: null,
      provider: null,
      provider_metadata: null,
      createdAt: null,
      updatedAt: null,
    },
    img_tablet: {
      id: 1,
      name: '',
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: null,
      mime: null,
      size: 0,
      url: '',
      previewUrl: null,
      provider: null,
      provider_metadata: null,
      createdAt: null,
      updatedAt: null,
    },
    img_mobile: {
      id: 1,
      name: '',
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: null,
      mime: null,
      size: 0,
      url: '',
      previewUrl: null,
      provider: null,
      provider_metadata: null,
      createdAt: null,
      updatedAt: null,
    },
  },
  section_live_debts: {
    id: 1,
    title: '',
    label: '',
    text: '',
    text_two: '',
    img: {
      id: 1,
      name: '',
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: null,
      mime: null,
      size: 0,
      url: '',
      previewUrl: null,
      provider: null,
      provider_metadata: null,
      createdAt: null,
      updatedAt: null,
    },
  },
  section_banner_analist: {
    id: 1,
    title: '',
    subtitle: '',
    label: '',
    img_desktop: {
      id: 1,
      name: '',
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: null,
      mime: null,
      size: 0,
      url: '',
      previewUrl: null,
      provider: null,
      provider_metadata: null,
      createdAt: null,
      updatedAt: null,
    },
    img_tablet: {
      id: 1,
      name: '',
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: null,
      mime: null,
      size: 0,
      url: '',
      previewUrl: null,
      provider: null,
      provider_metadata: null,
      createdAt: null,
      updatedAt: null,
    },
    img_mobile: {
      id: 1,
      name: '',
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: null,
      mime: null,
      size: 0,
      url: '',
      previewUrl: null,
      provider: null,
      provider_metadata: null,
      createdAt: null,
      updatedAt: null,
    },
  },
  section_choose_debt: {
    id: 1,
    title: '',
    text: '',
    list_text: '',
  },
  appointment: {
    title: '',
    text: '',
    names: {
      name: '',
      label: '',
    },
    phone: {
      name: '',
      label: '',
    },
    schedule: {
      name: '',
      label: '',
    },
    last_name: {
      name: '',
      label: '',
    },
    lbl_appointment_send: '',
    lbl_error_recaptcha: '',
  },
  menu: [],
  privacy_title: '',
  resources_title: '',
  label_recaptcha: '',
  label_call_two: '',
}

const initialState: ControllerState = {
  general: {
    id: 1,
    phone: '',
    phone_two: null,
    email: '',
    facebook_id: '',
    pixel_facebook: '',
    tag_manager: '',
    google_analytics: '',
    yandex_code: '',
    google_ads: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    social_networks: [],
    logo: {
      id: 27,
      name: '',
      alternativeText: '',
      caption: '',
      width: 0,
      height: 0,
      formats: null,
      hash: '',
      ext: '',
      mime: '',
      size: 0,
      url: '',
      previewUrl: null,
      provider: '',
      provider_metadata: null,
      createdAt: '',
      updatedAt: '',
    },
  },
  multilanguage: multi,
  multilenguaje: multi,
}

const GeneralsContext =
  createContext<ReturnType<typeof useGeneralsController>>(initialState)

interface GeneralsProviderProps extends PropsWithChildren {
  generals: ControllerState
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({
  children,
  generals,
}) => {
  return (
    <GeneralsContext.Provider value={useGeneralsController(generals)}>
      {children}
    </GeneralsContext.Provider>
  )
}

export const useGenerals = () => useContext(GeneralsContext)
