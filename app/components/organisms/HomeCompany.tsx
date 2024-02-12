/** @format */

import { Picture } from '@/interfaces/shared';
import Button from '@atoms/Button';
import Thumb from '@atoms/Thumb';
import { Title } from '@atoms/Title';
import { useGenerals } from '@context/generals.context';
import { Container } from '@globals/Container';
import { subtle } from 'crypto';
import { subscribe } from 'diagnostics_channel';
import React from 'react';

interface Props {
	img: Picture;
	subtitle: string;
	title: string;
	text: string;
}

const HomeCompany = ({ img, title, subtitle, text }: Props) => {
	const {
		multilanguage: { labels_buttons },
	} = useGenerals();
	return (
		<section className='HomeCompany'>
			<Container className='HomeCompany__container'>
				<Thumb className='HomeCompany__container__thumb' contain img={img} />
				<div className='HomeCompany__container__info'>
					<Title title={title} subtitle={subtitle} yellow />
					<p>{text}</p>
					<Button url='#' type={'icon'} white>
						{labels_buttons.lbl_read_more}
					</Button>
					
				</div>
			</Container>
		</section>
	);
};

export default HomeCompany;
