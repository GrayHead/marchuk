import React, {useState, useEffect} from 'react';

export default function Clock(props) {


	let [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		let {offset} = props;
		setInterval(() => {
			let date = new Date();
			date.setHours(offset);
			setDateTime(date);
		}, 1000);
	}, [dateTime.getSeconds()]);


	return (
		<div>
			clock
			<div>


				{dateTime && <h4>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>

				}
			</div>

		</div>
	);
}
