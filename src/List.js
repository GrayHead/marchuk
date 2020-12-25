import React, {Component} from 'react';
import Item from './Item';

class List extends Component {
	state = {numbers: [1, 2, 3, 4]};

	render() {
		let {numbers} = this.state;
		return (
			<div>
				<button onClick={() => {
					numbers.push(Math.floor(Math.random() * 100));
					this.setState({numbers});
				}}>add
				</button>
				<button onClick={() => {

					numbers.pop();
					this.setState({numbers})
					;
				}}>delete
				</button>

				{
					numbers.map((value, index) => <Item key={index} value={value}/>)
				}

			</div>
		);
	}
}

export default List;
