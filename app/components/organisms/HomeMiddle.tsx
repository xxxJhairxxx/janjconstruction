/** @format */

import { Picture } from '@/interfaces/shared';
import Thumb from '@atoms/Thumb';

interface Props {
	title: string;
	img: Picture;
}

const HomeMiddle = ({ title, img }: Props) => {
	return (
		<aside className='HomeMiddle'>
			<Thumb className='HomeMiddle__image' img={img} />
			<h2 className='HomeMiddle__title'>{title}</h2>
		</aside>
	);
};

export default HomeMiddle;
