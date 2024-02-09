import type { NextPage } from 'next'
import { getGenerals } from '../lib/getGenerals'
import { getArticles } from '@/lib/getArticles'

const Error: NextPage = () => {
  return <div>_error</div>
}

export default Error

// export const getStaticProps = async () => {
//   const generals = await getGenerals()
//   const resources = await getArticles()

//   return {
//     props: {
//       generals,
//       resources,
//     },
//     revalidate: 1,
//   }
// }
