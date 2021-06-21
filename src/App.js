import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';

import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser';

import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';

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
						<Route path="/new-user">
							<NewUser />
						</Route>
						<Route exact path="/products">
							<ProductList />
						</Route>
						<Route path="/product/:productId">
							<Product />
						</Route>
						<Route path="/new-product">{/* <NewUser /> */}</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
