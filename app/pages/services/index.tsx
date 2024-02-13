/** @format */

import { ServiceCardData, ServiceCards } from '@/interfaces/servicecards';
import { Service, ServiceData } from '@/interfaces/services';
import { baseApi } from '@/lib/baseApi';
import { getGenerals } from '@/lib/getGenerals';
import Button from '@atoms/Button';
import Thumb from '@atoms/Thumb';
import { Title } from '@atoms/Title';
import { useGenerals } from '@context/generals.context';
import { GetStaticProps } from 'next';
import React from 'react';

interface ConstructionProps {
	service: ServiceData;
	servicecards: ServiceCardData[];
}

const index = ({ service, servicecards }: ConstructionProps) => {
	const {
		multilanguage: { labels,labels_buttons},
	} = useGenerals();
	return (
		<main className='Service'>
			<section className='Service__info'>
				<div className='Service__info__text'>
					<Title title={service.title} subtitle={service.subtitle} />
					<p>{service.text}</p>
				</div>
				{/* <Thumb img={}> */}
			</section>

			<section className='Service__CardsContainer'>
				{servicecards.map(({ id, title, img_small, img_large }) => (
					<article key={id} className='Service__CardsContainer__cards'>
						<div className='Service__CardsContainer__cards-title'>
							<span>{labels.lbl_service}</span>
							<h1>{title}</h1>
						</div>
						<Thumb
							img={img_small}
							className='Service__CardsContainer__cards-thumb'
						/>
					</article>
				))}

				<Button className='Service__CardsContainer-btn '>{labels_buttons.lbl_see_more}</Button>
			</section>
		</main>
	);
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
	const generals = await getGenerals();

	const [{ data: service }, { data: servicecards }] = await Promise.all([
		baseApi.get<Service>(`/servi`),
		baseApi.get<ServiceCards>(`/services?populate=deep`),
	]);

	return {
		props: {
			service: service.data,
			servicecards: servicecards.data,
			generals,
		},
		revalidate: 1,
	};
};
