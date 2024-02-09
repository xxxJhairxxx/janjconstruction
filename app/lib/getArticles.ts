import { ResourceArticles } from '@/interfaces'
import { baseApi } from '@/lib/baseApi'

export const getArticles = async () => {
  try {
    const [{ data: resource }, { data: recursos }] = await Promise.all([
      baseApi.get<ResourceArticles>(
        '/resource-articles?locale=en&populate=deep'
      ),
      baseApi.get<ResourceArticles>(
        '/resource-articles?locale=es&populate=deep'
      ),
    ])
    return { resource: resource.data, recursos: recursos.data }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
