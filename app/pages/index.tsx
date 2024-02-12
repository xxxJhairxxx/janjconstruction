/** @format */

import { Home, HomeData } from '@/interfaces/home';
import { baseApi } from '@/lib/baseApi';
import { getGenerals } from '@/lib/getGenerals';
import HomeBanner from '@organisms/HomeBanner';
import HomeCompany from '@organisms/HomeCompany';
import HomeServices from '@organisms/HomeServices';
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
			<HomeCompany
				title={home.home_our_company.title}
				subtitle={home.home_our_company.subtitle}
				text={home.home_our_company.text}
				img={home.home_our_company.image}
			/>
			<HomeServices
				title={home.home_our_services.title}
				subtitle={home.home_our_services.subtitle}
				text={home.home_our_services.text}
				img={home.home_our_services.image}
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
