/** @format */

import { Title } from '@atoms/Title';
import React from 'react';

interface Props {
	title: string;
	subtitle: string;
	text: string;
}

const HomeWeWord = ({ title, subtitle, text }: Props) => {
	return (
		<section className='HomeWeWord'>
			<div className='HomeWeWord__info'>
				<Title title={title} subtitle={subtitle} center />
				<p>{text}</p>
			</div>
			<div className='HomeWeWord__gallery'>
				
			</div>
		</section>
	);
};

export default HomeWeWord;
