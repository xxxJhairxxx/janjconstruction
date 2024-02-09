import { General } from '@/interfaces/general'
import { baseApi } from './baseApi'
import { Multilanguage } from '@/interfaces/multilanguage'

export const getGenerals = async () => {
  try {
    const [
      { data: general },
      { data: multilanguage },
      { data: multilenguaje },
    ] = await Promise.all([
      baseApi.get<General>('/general?populate=deep'),
      baseApi.get<Multilanguage>(`/multilanguage?locale=en&populate=deep`),
      baseApi.get<Multilanguage>(`/multilanguage?locale=es&populate=deep`),
    ])

    return {
      general: general.data,
      multilanguage: multilanguage.data,
      multilenguaje: multilenguaje.data,
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
