/** @format */

import { useGenerals } from '@context/generals.context';
import React from 'react';

const Footer = () => {
	const {
		general,
		multilanguage: { labels_buttons, footer_form },
	} = useGenerals();
	return (
		<footer className={'Footer'}>
			<div className='Footer__title'>
				<h2>{footer_form.title}</h2>
				<p>{footer_form.text}</p>
			</div>
			<form className='Footer__form'>
				<div className='Footer__form__inputs'>
					<input type='text' placeholder={footer_form.email.placeholder} />
					<input type='text' placeholder={footer_form.message.placeholder} />
				</div>

				<button data-title={labels_buttons.lbl_send}  />
			</form>
			<div className='Footer__info'>
				<a href={general.address_url}>
					<address>{general.address}</address>
				</a>
				<a className='Footer__info-email' href={`emailto:${general.email}`}>
					{general.email}
				</a>
				<a className='Footer__info-phone' href={`tel:+${general.phone}`}>
					{general.phone}
				</a>
			</div>
		</footer>
	);
};

export default Footer;
