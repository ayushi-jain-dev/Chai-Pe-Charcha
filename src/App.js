import React, {useState} from 'react';
import NavBar from "./components/NavBar";
import News from "./components/News";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import './App.css';

const App = () => {
	const pageSize = 15
	const apiKey = process.env.REACT_APP_NEWS_API
	const country = "in"
	const [progress, setProgress] = useState(0)

	return (
		<div>
			<Router>
				<NavBar/>
				<LoadingBar
					height={3}
					color='#f11946'
					progress={progress}
				/>
				<Routes>
					<Route exact path="/science"
								 element={<News setProgress={setProgress} apiKey={apiKey} key="science"
																pageSize={pageSize}
																country={country}
																category="science"/>}></Route>
					<Route exact path="/business"
								 element={<News setProgress={setProgress} apiKey={apiKey} key="business"
																pageSize={pageSize}
																country={country}
																category="business"/>}></Route>
					<Route exact path="/entertainment"
								 element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment"
																pageSize={pageSize}
																country={country}
																category="entertainment"/>}></Route>
					<Route exact path="/general"
								 element={<News setProgress={setProgress} apiKey={apiKey} key="general"
																pageSize={pageSize}
																country={country}
																category="general"/>}></Route>
					<Route exact path="/health"
								 element={<News setProgress={setProgress} apiKey={apiKey} key="health"
																pageSize={pageSize}
																country={country}
																category="health"/>}></Route>
					<Route exact path="/sports"
								 element={<News setProgress={setProgress} apiKey={apiKey} key="sports"
																pageSize={pageSize}
																country={country}
																category="sports"/>}></Route>
					<Route exact path="/technology"
								 element={<News setProgress={setProgress} apiKey={apiKey} key="technology"
																pageSize={pageSize}
																country={country}
																category="technology"/>}></Route>
				</Routes>
			</Router>
		</div>
	);

}
export default App;
