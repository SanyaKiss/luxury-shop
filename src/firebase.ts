/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	// @ts-ignore
	apiKey: import.meta.env.VITE_API_KEY,
	// @ts-ignore
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	// @ts-ignore
	projectId: import.meta.env.VITE_PROJECT_ID,
	// @ts-ignore
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	// @ts-ignore
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	// @ts-ignore
	appId: import.meta.env.VITE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const AUTH = getAuth(app)

export const register = async (email: string, password: string) =>
	await createUserWithEmailAndPassword(AUTH, email, password)

export const login = async (email: string, password: string) =>
	await signInWithEmailAndPassword(AUTH, email, password)

export const logout = async () => {
	await signOut(AUTH)
}

export const DB = getFirestore(app)

export enum DBCollections {
	STORIES = 'stories',
	USERS = 'users',
	POSTS = 'posts',
	ACCOUNTS = 'accounts',
}
