import React from 'react';

interface ButtonProps {
	text: string;
	color: string;
	background: string;
	className: string;
	onClick?: () => void;
	type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
	text,
	color,
	background,
	className,
	onClick,
	type,
}) => {
	const styles = {
		fontFamily: 'Satoshi',
		fontSize: '16px',
		lineHeight: '150%',
		padding: '16px 32px',
		minWidth: '120px',
		cursor: 'pointer',
		color,
		background,
	};

	return (
		<button type={type ? type : 'button'} onClick={onClick} style={styles} className={className}>
			{text}
		</button>
	);
};
