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
  generals: GeneralData
  polylang: MultilanguageData
}

const useGeneralsController = ({
  generals,
  polylang,
}: ControllerState): ControllerState => {
  const [generalss, setGenerals] = useState({ generals, polylang })

  useEffect(() => {
    setGenerals({
      generals,
      polylang,
    })
  }, [])

  return { generals: generalss.generals, polylang: generalss.polylang }
}

const initialState: ControllerState = {
  generals: {
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
  polylang: {
    id: 1,
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    lbl_service: '',
    menu: [],
    labels_buttons: {
      id: 0,
      lbl_contact_us: '',
      lbl_read_more: '',
      lbl_send: '',
      lbl_see_more: '',
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
