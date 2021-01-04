import React, {Component} from 'react';

class ListItem extends Component {
	render() {

		let {children} = this.props;
		console.log(children);
		return (
			<li>
				{children}
			</li>
		);
	}
}

export default ListItem;
