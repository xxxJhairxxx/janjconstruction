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
			<h3 className={`general_title_subtitle ${yellow ? 'yellow' : ''}`}>
				{subtitle}
			</h3>
			{title && (
				<Tag className={`general_title_title ${yellow ? 'yellow' : ''}`}>
					{title}
				</Tag>
			)}
		</div>
	);
};
