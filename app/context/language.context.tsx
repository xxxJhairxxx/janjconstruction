import {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
  FC,
  Dispatch,
  useEffect,
  SetStateAction,
} from 'react'
import { useGenerals } from './generals.context'
import { MultilanguageData } from '@/interfaces/multilanguage'
import { baseApi } from '@/lib/baseApi'
import { ResourceArticlesData } from '@/interfaces'
import { useArticles } from './articles.context'

interface LanguageContextType {
  multiSlug: string
  setMultiSlug: Dispatch<SetStateAction<string>>
  localSlug: string
  setLocalSlug: Dispatch<SetStateAction<string>>
  toggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
  multilang: any
  setMultiLang: any
  menu: any
  articlesLang: any
  setArticlesLang: any
  urlEn: any
  urlEs: any
  urlBlogEn: any
  urlBlogEs: any
  urlPoliticEn: any
  urlPoliticEs: any
  pagesUrls: (asPath: string) => any[]
}

const LanguageContext = createContext<LanguageContextType>({
  multiSlug: '',
  setMultiSlug: () => '',
  toggle: true,
  setToggle: () => true,
  localSlug: '',
  setLocalSlug: () => '',
  multilang: '',
  setMultiLang: () => '',
  menu: [],
  articlesLang: [],
  setArticlesLang: () => [],
  urlEn: [],
  urlEs: [],
  urlBlogEn: [],
  urlBlogEs: [],
  urlPoliticEn: [],
  urlPoliticEs: [],
  pagesUrls: () => [],
})

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const storedToggle =
    typeof window !== 'undefined' && localStorage.getItem('toggle')
  const [toggle, setToggle] = useState<boolean>(
    storedToggle ? JSON.parse(storedToggle) : true
  )
  const { multilenguaje, multilanguage } = useGenerals()
  const { recursos, resource } = useArticles()
  ///
  const [multiSlug, setMultiSlug] = useState<string>('')
  const [localSlug, setLocalSlug] = useState<string>('')
  const [multilang, setMultiLang] = useState<MultilanguageData>(multilenguaje)
  const [articlesLang, setArticlesLang] =
    useState<ResourceArticlesData[]>(recursos)
  const [menu, setMenu] = useState([])
  const [urlEs, setUrlEs] = useState<any>([])
  const [urlEn, setUrlEn] = useState<any>([])
  const [urlBlogEs, setUrlBlogEs] = useState<any>([])
  const [urlBlogEn, setUrlBlogEn] = useState<any>([])
  const [urlPoliticEs, setUrlPoliticEs] = useState<any>([])
  const [urlPoliticEn, setUrlPoliticEn] = useState<any>([])

  const pagesUrls = (asPath: string): any[] => {
    const menus = toggle ? urlEn : urlEs
    return menus.map((menuItem: any) => {
      if (asPath === '/' || asPath.split('/')[1] === 'en') {
        return {
          ...menuItem,
          url: menuItem.url === '/' ? '/' : '/en/' + menuItem.url, // el en debe tener su '/' para que el enlace sea siempre el mismo
        }
      }
      if (asPath.split('/')[1] === 'es') {
        return {
          ...menuItem,
          url: menuItem.url === '/es' ? '/es' : '/es/' + menuItem.url,
        }
      }

      return menuItem
    })
  }

  useEffect(() => {
    ;(async () => {
      const { data: urls } = await baseApi.get<PagesUrl>(
        '/page-urls?locale=es&populate=deep'
      )
      setUrlEs(urls.data)
    })()
    ;(async () => {
      const { data: urls } = await baseApi.get<PagesUrl>(
        '/page-urls?locale=en&populate=deep'
      )
      setUrlEn(urls.data)
    })()
    ;(async () => {
      const { data: blogs } = await baseApi.get<any>(
        '/resource-articles?locale=es&populate=deep'
      )
      setUrlBlogEs(blogs.data)
    })()
    ;(async () => {
      const { data: blogs } = await baseApi.get<any>(
        '/resource-articles?locale=en&populate=deep'
      )
      setUrlBlogEn(blogs.data)
    })()
    ;(async () => {
      const { data: politic } = await baseApi.get<any>(
        '/politics?locale=es&populate=deep'
      )
      setUrlPoliticEs(politic.data)
    })()
    ;(async () => {
      const { data: politic } = await baseApi.get<any>(
        '/politics?locale=en&populate=deep'
      )
      setUrlPoliticEn(politic.data)
    })()
  }, [])

  useEffect(() => {
    toggle ? setMultiLang(multilanguage) : setMultiLang(multilenguaje)
    toggle ? setArticlesLang(resource) : setArticlesLang(recursos)
    toggle ? setMenu(urlEn) : setMenu(urlEs)
  }, [toggle, urlEn, urlEs, resource, recursos])

  return (
    <LanguageContext.Provider
      value={{
        multiSlug,
        setMultiSlug,
        toggle,
        setToggle,
        localSlug,
        setLocalSlug,
        multilang,
        setMultiLang,
        menu,
        urlEn,
        urlEs,
        urlBlogEn,
        urlBlogEs,
        articlesLang,
        setArticlesLang,
        urlPoliticEn,
        urlPoliticEs,
        pagesUrls,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error('NavbarContext debe ser usado dentro de NavbarProvider')
  }

  return context
}
