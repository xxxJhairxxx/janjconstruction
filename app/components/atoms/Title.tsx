/** @format */

import { FC } from 'react';

interface TitleProps {
	title: string;
	className?: string;
	center?: boolean;
	tag?: keyof JSX.IntrinsicElements;
}

export const Title: FC<TitleProps> = ({
	title,
	className = '',
	center = false,
	tag: Tag = 'h2',
}) => {
	return (
		<div
			className={`title-prin ${center ? 'center' : ''}  ${className}`}
		>
			<Tag>{title}</Tag>
		</div>
	);
};