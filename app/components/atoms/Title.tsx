/** @format */

import { FC } from 'react';

interface TitleProps {
	title?: string;
	subtitle?: string;
	className?: string;
	center?: boolean;
	yellow?: boolean;
	tag?: keyof JSX.IntrinsicElements;
}

export const Title: FC<TitleProps> = ({
	title,
	subtitle,
	yellow = false,
	className = '',
	center = false,
	tag: Tag = 'h2',
}) => {
	return (
		<div className={`general_title ${center ? 'center' : ''}  ${className}`}>
			<strong className={`general_title_subtitle ${yellow ? 'yellow' : ''}`}>
				{subtitle}
			</strong>
			{title && (
				<Tag className={`general_title_title ${yellow ? 'yellow' : ''}`}>
					{title}
				</Tag>
			)}
		</div>
	);
};
