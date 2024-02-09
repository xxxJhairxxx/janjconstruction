import { ResourceArticlesData } from '@/interfaces'
import { FC, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

export interface ArticlesControllerState {
  resource: ResourceArticlesData[]
  recursos: ResourceArticlesData[]
}

const useArticlesController = ({
  resource,
  recursos,
}: ArticlesControllerState): ArticlesControllerState => {
  const [resources, setResources] = useState({ resource, recursos })

  useEffect(() => {
    setResources({ resource, recursos })
  }, [])

  return { resource: resources.resource, recursos: resources.recursos }
}

const initialState: ArticlesControllerState = {
  resource: [],
  recursos: [],
}

const ArticlesContext =
  createContext<ReturnType<typeof useArticlesController>>(initialState)

/*=============================================================================== */

interface ArticlesProviderProps extends PropsWithChildren {
  resources: ArticlesControllerState
}

export const ArticleProvider: FC<ArticlesProviderProps> = ({
  children,
  resources,
}) => {
  return (
    <ArticlesContext.Provider value={useArticlesController(resources)}>
      {children}
    </ArticlesContext.Provider>
  )
}

export const useArticles = () => useContext(ArticlesContext)
