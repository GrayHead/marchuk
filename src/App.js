import React, {Component, createRef} from 'react';
import Clock from './Clock';

class App extends Component {

	inputX = createRef();

	render() {
		return (
			<div>
				<Clock/>
				<Clock/>
			</div>
		);
	}
}

export default App;
