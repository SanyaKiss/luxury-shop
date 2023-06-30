import React from 'react';
import '../../scss/UI/Heading.scss';

type HeadingProps = {
	text: string;
};

export const Heading: React.FC<HeadingProps> = ({ text }) => {
	return (
		<div className='heading'>
			<h2 className='heading__title'>{text}</h2>
		</div>
	);
};
