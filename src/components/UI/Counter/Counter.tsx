import React from 'react'
import '../../../scss/UI/Counter.scss'

interface CounterProps {
	count: number
	increase: () => void
	decrease: () => void
}

export const Counter: React.FC<CounterProps> = ({ count, increase, decrease }) => {
	return (
		<div className='counter'>
			<button data-testid='dec-btn' className='counter__button' onClick={decrease}>
				<span>-</span>
			</button>
			<input data-testid='value' type='text' className='counter__input' value={count} readOnly />
			<button data-testid='inc-btn' className='counter__button' onClick={increase}>
				<span>+</span>
			</button>
		</div>
	)
}
