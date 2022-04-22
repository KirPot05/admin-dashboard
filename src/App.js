import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="app">
			<Header/>

			<div class="app__body">
				<Sidebar/>
				<Dashboard/>
			</div>

		</div>
	);
}

export default App;
