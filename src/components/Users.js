import React, {useState, useEffect} from 'react';
import User from './User';

export default function Users() {

	let [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(usersList => {
				setUsers(usersList);
			});
	}, []);

	return (
		<div>
			{
				users.map(user => <User key={user.id} item={user}/>)

			}

		</div>
	);
}
