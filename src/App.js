import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom';
import Users from './components/usrers/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<div><Link to={'/clients'}>to all users</Link></div>
					<div><Link to={'/posts'}>to all posts </Link></div>
					<div><Link to={'/comments'}>to all comments </Link></div>


					<div>

						<Switch>

							<Route path={'/clients'}
								   render={(props) => {
									   return <Users/>;
								   }}/>

							<Route path={'/posts'} component={Posts}/>

							<Route path={'/comments'}>
								<Comments/>
							</Route>
						</Switch>


					</div>

				</div>
			</Router>
		);
	}
}

export default App;
