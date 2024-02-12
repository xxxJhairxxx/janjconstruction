/** @format */

import { Picture } from '@/interfaces/shared';
import Image from 'next/image';
import React from 'react';

interface Props {
	img: Picture;
	img_tablet?: Picture;
	img_laptop?: Picture;
	className?: string;
}

const Thumb = ({ img, img_tablet, img_laptop, className }: Props) => {
	return (
		<picture className={`Thumb-image ${className ? className : ''}`}>
			{img_laptop && (
				<source media='(min-width: 1024px)' srcSet={img_laptop.url} />
			)}
			{img_tablet && (
				<source media='(min-width: 768px)' srcSet={img_tablet.url} />
			)}
			<Image
				src={img.url}
				width={img.width}
				height={img.height}
				alt={img.alternativeText || ''}
			/>
			
		</picture>
	);
};

export default Thumb;
