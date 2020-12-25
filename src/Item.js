import React, {Component} from 'react';

class Item extends Component {

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(prevProps, prevState);
	}


	shouldComponentUpdate(nextProps, nextState, nextContext) {
		let {value} = this.props;
		console.log(value, nextProps);
		return value !== nextProps;


	}

	componentWillUnmount() {
		console.log('unmounted');
	}

	render() {
		let {value} = this.props;
		return (
			<div>
				{value}
			</div>
		);
	}
}

export default Item;
