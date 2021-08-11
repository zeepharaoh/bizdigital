import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import ScheduleACall from './pages/ScheduleCall';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/schedule-call' component={ScheduleACall} exact />
			</Switch>
		</Router>
	);
}

export default App;
