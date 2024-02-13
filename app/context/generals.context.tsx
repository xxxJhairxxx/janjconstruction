import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

import { GeneralData } from '@/interfaces/general'
import { MultilanguageData } from '@/interfaces/multilanguage'
export interface ControllerState {
  general: GeneralData
  multilanguage: MultilanguageData
}

const useGeneralsController = ({
  general,
  multilanguage,
}: ControllerState): ControllerState => {
  const [generals, setGenerals] = useState({ general, multilanguage })

  useEffect(() => {
    setGenerals({
      general,
      multilanguage,
    })
  }, [])

  return { general: generals.general, multilanguage: generals.multilanguage }
}

const initialState: ControllerState = {
  general: {
    id: 1,
    address: '',
    email: '',
    phone: '',
    facebook_id: '',
    pixel_facebook: '',
    tag_manager: '',
    google_analytics: '',
    yandex_code: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    google_ads: '',
    address_url: '',
    logo: [],
    social_networks: [],
  },
  multilanguage: {
    id: 1,
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    menu: [],
    labels_buttons: {
      id: 0,
      lbl_contact_us: '',
      lbl_read_more: '',
      lbl_send: '',
      lbl_see_more: '',
      lbl_accept: '',
    },
    contact_form: {
      id: 1,
      title: '',
      messages: {
        invalid_tel: '',
        invalid_name: '',
        mail_sent_ok: '',
        invalid_email: '',
        invalid_number: '',
        invalid_required: '',
        validation_error: '',
        invalid_recaptcha: '',
      },
      name: {
        id: 1,
        name: '',
        label: '',
        placeholder: '',
      },
      email: {
        id: 1,
        name: '',
        label: '',
        placeholder: '',
      },
      phone: {
        id: 1,
        name: '',
        label: '',
        placeholder: '',
      },
      services: {
        id: 1,
        name: '',
        label: '',
        placeholder: '',
      },
      message: {
        id: 1,
        name: '',
        label: '',
        placeholder: '',
      },
    },
    footer_form: {
      id: 1,
      title: '',
      text: '',
      email: {
        id: 1,
        name: '',
        label: '',
        placeholder: '',
      },
      message: {
        id: 1,
        name: '',
        label: '',
        placeholder: '',
      },
    },
    labels: {
      lbl_error_recaptcha: '',
      lbl_service: '',
    },
  },
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
