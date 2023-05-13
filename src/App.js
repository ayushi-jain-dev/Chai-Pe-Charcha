import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import News from "./components/News";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

class App extends Component {
	pageSize = 15;
	country = "in";

	render() {

		return (
			<div>
				<Router>
					<NavBar/>
					<Routes>
						<Route exact path="/science"
									 element={<News key="science" pageSize={this.pageSize} country={this.country}
																	category="science"/>}></Route>
						<Route exact path="/business"
									 element={<News key="business" pageSize={this.pageSize} country={this.country}
																	category="business"/>}></Route>
						<Route exact path="/entertainment"
									 element={<News key="entertainment" pageSize={this.pageSize} country={this.country}
																	category="entertainment"/>}></Route>
						<Route exact path="/general"
									 element={<News key="general" pageSize={this.pageSize} country={this.country}
																	category="general"/>}></Route>
						<Route exact path="/health"
									 element={<News key="health" pageSize={this.pageSize} country={this.country}
																	category="health"/>}></Route>
						<Route exact path="/sports"
									 element={<News key="sports" pageSize={this.pageSize} country={this.country}
																	category="sports"/>}></Route>
						<Route exact path="/technology"
									 element={<News key="technology" pageSize={this.pageSize} country={this.country}
																	category="technology"/>}></Route>
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
