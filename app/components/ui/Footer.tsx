/** @format */

import { useGenerals } from '@context/generals.context';
import React from 'react';


const Footer = () => {
    const {general,multilanguage:{labels_buttons}}= useGenerals();
	return (
		<footer className={'Footer'}>
			<div>
				{/* <h2>{title}</h2>
				<p>{text}</p> */}
			</div>
			<form action=''>
				<input type='text' />
				<input type='text' />
				<button>{labels_buttons.lbl_send}</button>
			</form>
            <div className=''>
                <a href=""><address>{general.address}</address></a>
                <a href={`emailto:${general.email}`}>{general.email}</a>
                <a href={`tel:+${general.phone}`}>{general.phone}</a>
                
            </div>
		</footer>
	);
};

export default Footer;
