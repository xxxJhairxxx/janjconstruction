

// interface HomeProps {
//   home: HomeData
// }

import { Title } from "@atoms/Title";

export default function Index() {
  return <main>
    <Title>hello</Title>
  </main>
}

// export const getStaticProps: GetStaticProps = async () => {
//   const generals = await getGenerals()
//   const resources = await getArticles()

//   const [{ data: home }] = await Promise.all([
//     baseApi.get<Home>(`/home?locale=en&populate=deep`),
//   ])

//   return {
//     props: {
//       home: home.data,
//       generals,
//       resources,
//     },
//     revalidate: 1,
//   }
// }
