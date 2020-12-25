import React, {Component} from 'react';

class Child extends Component {

	state = {a: ''};
	counter = 0;

	constructor(props, context) {
		super(props, context);
		console.log('constructor Child');
	}

	onClickStateChange = () => {
		this.setState({a: this.counter});
		this.counter++;
	};


	render() {

		console.log('render Child');
		return (
			<div>
				child
				<button onClick={this.onClickStateChange}>change state</button>
			</div>
		);
	}


	componentDidMount() {
		console.log('CDM Child');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('CDU Child', prevProps, prevState);

	}
}

export default Child;
