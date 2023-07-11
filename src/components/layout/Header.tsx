import React, { useState } from 'react';
import '../../scss/layout/Header.scss';
import { categories } from '../../constants';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { SignModal } from '../UI/SignModal';
import { useFilters } from '../../stores/filters/store';

interface HeaderProps {
	cropped?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ cropped }) => {
	const changeCategory = useFilters((state) => state.changeCategory);
	const { logout, user } = useAuth();
	const [userPopupOpen, setUserPopupOpen] = useState(false);
	const [ModalOpen, setModalOpen] = useState(false);

	const toggleDialog = () => {
		setModalOpen(!ModalOpen);
	};

	const handleUserClick = () => {
		setUserPopupOpen(!userPopupOpen);
	};

	return (
		<header className='header'>
			<div className='header__top'>
				<Link to='/' className='header__title'>
					Luxury
				</Link>
				<nav className='header__navbar'>
					<Link to='/products' className='header__products'>
						Products
					</Link>
					<Link to='/about' className='header__about'>
						About us
					</Link>
					<Link to='/cart'>
						<img src='images/header/cart.svg' alt='Cart' className='header__cart' />
					</Link>
					<img
						src='images/header/user-icon.png'
						alt='user'
						className='header__user'
						onClick={handleUserClick}
					/>
				</nav>
			</div>
			{!(cropped ?? false) && (
				<div className='header__bottom'>
					<div className='header__links'>
						{categories.map((item, index) => {
							if (item !== 'All')
								return (
									<Link
										to='/products'
										key={index}
										onClick={() => {
											changeCategory(item);
										}}
										className='header__link'
									>
										{item}
									</Link>
								);
							return null;
						})}
					</div>
				</div>
			)}
			{userPopupOpen && (
				<div className='user-popup'>
					<div className='user-popup__content'>
						{user != null ? (
							<>
								<div className='user-popup__info'>
									<p className='user-popup__username'>{user?.displayName}</p>
									<p className='user-popup__email'>{user?.email}</p>
								</div>
								<button
									className='user-popup__button'
									onClick={async () => {
										await logout();
									}}
								>
									Logout
								</button>
							</>
						) : (
							<>
								<button
									className='user-popup__button user-popup__button_signup'
									onClick={toggleDialog}
								>
									Sign Up
								</button>
								<button className='user-popup__button' onClick={toggleDialog}>
									Log in
								</button>
							</>
						)}
					</div>
				</div>
			)}
			<SignModal isOpen={ModalOpen} onClose={toggleDialog} />
		</header>
	);
};
