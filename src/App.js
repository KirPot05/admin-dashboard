import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {

	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="app">
			<Header setSidebarOpen={setSidebarOpen}/>

			<div class="app__body">
				<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
				<Dashboard sidebarOpen={sidebarOpen}/>
			</div>

		</div>
	);
}

export default App;
