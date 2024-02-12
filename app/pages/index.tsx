/** @format */

// interface HomeProps {
//   home: HomeData
// }

import Button from '@atoms/Button';
import { Title } from '@atoms/Title';

export default function Index() {
	return (
		<main>
			{/* <Title
				title='J&C CONSTRUCCION'
				subtitle={'OUR COMPANY.'}
			/> */}
      <Button url={"#"} onClick={()=>alert("sape")}>
        Contact Us
      </Button> 

	  
		</main>
	);
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
