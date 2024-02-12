/** @format */

import { Picture } from '@/interfaces/shared';
import Button from '@atoms/Button';
import Thumb from '@atoms/Thumb';
import { useGenerals } from '@context/generals.context';
import { Container } from '@globals/Container';
import React from 'react';

interface Props {
	title: string;
	subtitle: string;
	img_mobile: Picture;
}

const HomeBanner = ({ title, subtitle, img_mobile }: Props) => {

    const {multilanguage:{labels_buttons}} = useGenerals();
	return (
		<section className='HomeBanner'>
			<Thumb className={'HomeBanner__bg-thumb'} img={img_mobile} />

			<Container className='HomeBanner__info'>
				<h1>
					<span>{subtitle}</span>
					<span>{title.split('**')[1]}</span>
					<span>{title.split('**')[2]}</span>
				</h1>
				<div className='HomeBanner__info__buttons'>
                    <Button url='/contact' white>{labels_buttons.lbl_contact_us}</Button>
                    <Button url='/'>{labels_buttons.lbl_read_more}</Button>
                </div>
			</Container>
		</section>
	);
};

export default HomeBanner;
