import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Saludar from './Saludar';
import Principal from './Principal';
import Header from './Header';

export class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<br />
						<Route exact path='/' component={Principal} />
						<Route exact path='/saludar' component={Saludar} />
						<Route exact path='/saludar/bedu' component={Principal} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
