import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';

function App() {
	return (
		<Router className="App">
			<Navbar />
			<div className="container">
				<Sidebar />
				<div className="other-content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/users">
							<UserList />
						</Route>
						<Route path="/user/:userId">
							<User />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
