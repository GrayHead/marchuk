import React, {Component} from 'react';
import ListItem from './ListItem';

class App extends Component {
	state = {
		menuItems: ['About', 'Contcts', 'Menu']
	};

	render() {
		let {menuItems} = this.state;
		return (
			<div>
				<ul>
					{
						menuItems.map(value => <ListItem>{value}</ListItem>)
					}
				</ul>
			</div>
		);
	}
}

export default App;
