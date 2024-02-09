

// interface HomeProps {
//   home: HomeData
// }

export default function Index() {
  return <main>
    <h1>hello</h1>
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
