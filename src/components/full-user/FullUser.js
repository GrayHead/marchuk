import React, {Component} from 'react';
import UserService from '../../services/UserService';
import {
	withRouter
} from 'react-router-dom';

class FullUser extends Component {

	userService = new UserService();
	state = {user: null};

	async componentDidMount() {
		let {match: {params: {id}}} = this.props;
		console.log(id);
		let user = await this.userService.getUser(id);
		this.setState({user});
	}

	render() {
		let {user} = this.state;

		console.log('render');
		return (
			<div>
				{user && <div>{user.id} - {user.name} - {user.email}</div>}
			</div>
		);
	}
}

export default withRouter(FullUser);
