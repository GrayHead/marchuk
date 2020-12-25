import React, {Component} from 'react';
import Child from './Child';
import List from './List';

class App extends Component {


	constructor(props, context) {
		super(props, context);
		console.log('constructor');

	}

	render() {
		console.log('render');
		return (

			<div>
				<Child a={'okten'}/>
				<List/>

			</div>
		);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

}

export default App;
