import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<Sidebar />
				<div className="other-content">
					<Home />
				</div>
			</div>
		</div>
	);
}

export default App;
