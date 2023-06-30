import React from 'react';
import '../../scss/layout/Features.scss';
import { features } from '../../constants';
import { Feature } from '../UI/Feature';

export const Features: React.FC = () => {
	return (
		<div className='features'>
			<div className='features__container'>
				<h2 className='features__title'>What makes our brand different</h2>
				<div className='features__items'>
					{features.map((feature, index) => (
						<Feature key={index} {...feature} />
					))}
				</div>
			</div>
		</div>
	);
};
