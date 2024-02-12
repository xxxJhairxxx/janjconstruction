/** @format */

import { Home, HomeData } from '@/interfaces/home';
import { baseApi } from '@/lib/baseApi';
import { getGenerals } from '@/lib/getGenerals';
import HomeBanner from '@organisms/HomeBanner';
import { GetStaticProps } from 'next';

interface HomeProps {
	home: HomeData;
}

const Index = ({ home }: HomeProps) => {
	return (
		<main>
			<HomeBanner
				title={home.home_banner.title}
				subtitle={home.home_banner.subtitle}
				img_mobile={home.home_banner.img_mobile}
			/>
		</main>
	);
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
	const generals = await getGenerals();

	const [{ data: home }] = await Promise.all([
		baseApi.get<Home>(`/home?locale=en&populate=deep`),
	]);

	return {
		props: {
			home: home.data,
			generals,
		},
		revalidate: 1,
	};
};
