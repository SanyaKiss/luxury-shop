import * as yup from 'yup'

export const schema = yup.object().shape({
	userName: yup.string().required('Username is required'),
	email: yup.string().required('Email is required').email('Email is invalid'),
	password: yup.string().min(6, 'Minimum 6 symbols').required('Password is required'),
})
