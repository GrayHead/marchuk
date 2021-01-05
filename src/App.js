import React, {Component, createRef} from 'react';
import Clock from './Clock';

class App extends Component {

	state = {
		clocks: []
	};
	setClock = (e) => {
		e.preventDefault();
		let offset = +e.target[0].value;
		this.state.clocks.push({offset});
		this.setState(this.state.clocks)


	};

	render() {
		return (
			<div>

				<form onSubmit={this.setClock}>
					<input type="number" min={0} max={24}/>
					<button>set clock</button>


				</form>
				{
					this.state.clocks.map(clock => <Clock offset={clock.offset}/>)
				}


			</div>
		);
	}
}

export default App;
