/** @format */

import { Picture } from '@/interfaces/shared';
import Button from '@atoms/Button';
import Thumb from '@atoms/Thumb';
import { Title } from '@atoms/Title';
import { useGenerals } from '@context/generals.context';
import { Container } from '@globals/Container';
import React from 'react';

interface Props {
	img: Picture;
	subtitle: string;
	title: string;
	text: string;
}

const HomeServices = ({img, title, subtitle, text}:Props) => {
    const {multilanguage:{labels_buttons}} = useGenerals();
	return (
		<section className='HomeServices'>
			<Container className='HomeServices__container'>
				<div>
					<Title title={title} subtitle={subtitle} />
                    <p>{text}</p>
                    <Button url={'#'} >
                        {labels_buttons.lbl_read_more}
                    </Button>
				</div>

                <Thumb className={"HomeServices__thumb"} img={img}></Thumb>
			</Container>
		</section>
	);
};

export default HomeServices;
