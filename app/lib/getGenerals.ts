import { General } from '@/interfaces/general'
import { baseApi } from './baseApi'
import { Multilanguage } from '@/interfaces/multilanguage'

export const getGenerals = async () => {
  try {
    const [{ data: general }, { data: multilanguage }] = await Promise.all([
      baseApi.get<General>('/general?populate=deep'),
      baseApi.get<Multilanguage>(`/multilanguage?populate=deep`),
    ])

    return {
      general: general.data,
      multilanguage: multilanguage.data,
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
