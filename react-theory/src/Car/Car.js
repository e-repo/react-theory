import React from 'react';
import './Car.css';

export default (props) => {
	const inputClass = ['input'];
	if (props.name !== '') {
		inputClass.push('green');
	} else {
		inputClass.push('red');
	}

	const style = {
		border: '2px solid #ccc',
	};

	return (
		<div className='car-card' style={style}>
			<div>
				<button onClick={props.changeTitle}>Change title car</button>
			</div>
			<h2>Name: {props.name}</h2>
			<p>Year: {props.year}</p>
			<div>
				<input
					type="text"
					onChange={props.changeCarName}
					value={props.name}
					className={inputClass.join(' ')}
				/>
			</div>
		</div>
	)
};
