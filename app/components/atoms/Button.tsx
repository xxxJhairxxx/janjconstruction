/** @format */

import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
	url?: string;
	className?: string;
	type?: "icon" | "clean";
	onClick?: () => void;
	white?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	url,
	className,
	type = 'clean',
	onClick,
	white = false,
}) => {
	return url ? (
		<Link
			className={` ${type==="clean" ? 'button-link' : 'button-link-icon'} ${white ? 'btn-white' : ''} ${className}`}
			href={url}
		>
			{children}
		</Link>
	) : (
		<button className={`button ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
