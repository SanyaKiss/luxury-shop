import '../../../scss/UI/SignModal.scss'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthProvider'
import { Button } from '../Button'
import { schema } from './SignModal.support'
import { yupResolver } from '@hookform/resolvers/yup'
import type * as Yup from 'yup'
import { useForm, type SubmitHandler } from 'react-hook-form'

interface ModalType {
	isOpen: boolean
	onClose: () => void
	emailValue?: string
}

type UserSubmitForm = Yup.InferType<typeof schema>

export const SignModal: React.FC<ModalType> = ({ isOpen, onClose, emailValue }) => {
	const [activeTab, setActiveTab] = useState<'sign up' | 'login'>('sign up')
	const { register: signUp, login, signInWithGoogle, user } = useAuth()
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<UserSubmitForm>({
		resolver: yupResolver(schema),
		defaultValues: { userName: '' },
	})

	const onSubmit: SubmitHandler<UserSubmitForm> = async ({ email, password, userName }) => {
		try {
			if (activeTab === 'sign up') {
				await signUp(email, password, userName)
			} else {
				await login(email, password)
				if (user == null) {
					setError('email', {
						type: 'manual',
						message: 'Неверный email или пароль',
					})
				}
			}
			user !== null && onClose()
		} catch (error) {
			console.log(error)
			setError('email', {
				type: 'manual',
				message: 'Ошибка при попытке входа в аккаунт',
			})
		}
	}

	const handleTabChange = (tab: 'sign up' | 'login') => {
		setActiveTab(tab)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const modal = document.querySelector('.sign-dialog__content')
			if (modal != null && !modal.contains(event.target as Node)) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	return (
		<div>
			{isOpen && (
				<div className='sign-dialog'>
					<div className='sign-dialog__content'>
						<div className='sign-dialog__tabs'>
							<p
								className={`sign-dialog__tab ${activeTab === 'sign up' ? 'active' : ''}`}
								onClick={() => {
									handleTabChange('sign up')
								}}
							>
								Sign Up
							</p>
							<p
								className={`sign-dialog__tab ${activeTab === 'login' ? 'active' : ''}`}
								onClick={() => {
									handleTabChange('login')
								}}
							>
								Log In
							</p>
						</div>
						<form onSubmit={handleSubmit(onSubmit)} className='sign-dialog__form'>
							{activeTab === 'sign up' && (
								<>
									<input
										className='sign-dialog__input'
										type='text'
										placeholder='Username'
										{...register('userName')}
									/>
									<input
										className='sign-dialog__input'
										type='email'
										placeholder='Your email'
										{...register('email')}
									/>
									{errors.email != null && (
										<p style={{ marginBottom: '10px' }}> {errors.email.message}</p>
									)}
									<input
										className='sign-dialog__input'
										type='password'
										placeholder='Password'
										{...register('password')}
									/>
									{errors.password != null && (
										<p style={{ marginBottom: '10px' }}>{errors.password.message}</p>
									)}
								</>
							)}
							{activeTab === 'login' && (
								<>
									<input
										className='sign-dialog__input'
										type='email'
										placeholder='Your email'
										{...register('email')}
									/>
									<input
										className='sign-dialog__input'
										type='password'
										placeholder='Password'
										{...register('password')}
									/>
									{errors.password != null && (
										<p style={{ marginBottom: '10px' }}>{errors.password.message}</p>
									)}
									{errors.email != null && (
										<p style={{ marginBottom: '10px' }}>{errors.email.message}</p>
									)}
								</>
							)}
							<div className='sign-dialog__buttons'>
								<Button
									text={activeTab === 'sign up' ? 'Sign Up' : 'Log In'}
									color='#FFFFFF'
									background='#2a254b'
									className='sign-dialog__button'
									type='submit'
								/>
								<button onClick={signInWithGoogle} className='sign-dialog__button_google'>
									<img
										className='sign-dialog__button_google-icon'
										src='../../../images/products/google.png'
										alt=''
									/>
									<div className='sign-dialog__button-text'>Sign in with Google</div>
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}
