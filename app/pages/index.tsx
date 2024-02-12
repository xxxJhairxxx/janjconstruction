/** @format */

// interface HomeProps {
//   home: HomeData
// }

import { getGenerals } from '@/lib/getGenerals'
import Button from '@atoms/Button'
import { Title } from '@atoms/Title'
import { useGenerals } from '@context/generals.context'
import { GetStaticProps } from 'next'

export default function Index() {
  const { generals } = useGenerals()
  console.log(generals)
  return (
    <main>
      {/* <Title
				title='J&C CONSTRUCCION'
				subtitle={'OUR COMPANY.'}
			/> */}
      <Button>Contact Us</Button>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals()

  // const [{ data: home }] = await Promise.all([
  //   baseApi.get<Home>(`/home?locale=en&populate=deep`),
  // ])

  return {
    props: {
      // home: home.data,
      generals,
    },
    revalidate: 1,
  }
}
