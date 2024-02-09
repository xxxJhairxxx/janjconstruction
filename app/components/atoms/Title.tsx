/** @format */

import { FC } from 'react';

interface TitleProps {
	title: string;
	className?: string;
	center?: boolean;
	hidden?: boolean;
	inline?: boolean;
	tag?: keyof JSX.IntrinsicElements;
}

export const Title: FC<TitleProps> = ({
	title,
	className = '',
	center,
	hidden,
	inline = false,
	tag: Tag = 'h2',
}) => {
	const ogText: string[] = title.includes('/') ? title.split('/') : [title];

	const hasSlash = ogText.length > 1;

	return (
		<div
			className={`title-prin ${center ? 'center' : ''} ${
				hidden && 'none'
			} ${className}`}
		>
			<Tag>
				{hasSlash ? (
					<>
						{ogText[0]}{' '}
						{ogText[1] && (
							<span className={`${inline ? '!inline' : ''} ${hasLetterLarge(ogText[1]) ? "large": ""}` }>{ogText[1]}</span>
						)}
					</>
				) : (
					title
				)}
			</Tag>
		</div>
	);
};

const hasLetterLarge = (text: string): boolean => {
	const foundLetter = new Set(['p', 'q', 'g','y']);
	const listLetter: Array<string> = text.split(' ')[text.split(' ').length - 1].split('');

  return listLetter.some(word => foundLetter.has(word));
};
