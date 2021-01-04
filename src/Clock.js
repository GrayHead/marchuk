import React, {useState, useEffect} from 'react';

export default function Clock() {

	let [time, setTime] = useState(new Date());


	let onDataInput = (e) => {
		e.preventDefault(); // prevent reload
		let num = +e.target[0].value;
		let date = new Date();
		date.setHours(date.getHours() + num);
		setInterval(() => {
			setTime(date);
			console.log('settime');
		}, 1000);
	};

	useEffect(() => {
		console.log('time changed');
	}, [time]);

	return (
		<div>
			<form onSubmit={onDataInput}>
				<input type="number"/>
				<button>find</button>
			</form>
			<div>{time && <span>{time.getHours()}{time.getMinutes()}{time.getSeconds()}</span>}</div>

		</div>
	);
}
