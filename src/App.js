import React, {useState} from 'react';
import NavBar from "./components/navbar/NavBar";
import News from "./pages/news/News";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import {Blogs} from "./pages/blogs/blogs";
import {BlogDetails} from "./pages/blog-details/blog-details";

const App = () => {
	const pageSize = 15
	const apiKey = process.env.REACT_APP_NEWS_API
	const country = "in"
	const [progress, setProgress] = useState(0)

	return (
		<Router>
			<NavBar/>
			<LoadingBar
				height={3}
				color='#f11946'
				progress={progress}
			/>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<News
							setProgress={setProgress} apiKey={apiKey} key="general"
							pageSize={pageSize}
							country={country}
							category="general"
						/>
					}
				/>
				<Route
					exact
					path="/blogs"
					element={
						<Blogs/>
					}
				/>
				<Route
					exact
					path="/blog/:id"
					element={
						<BlogDetails/>
					}
				/>
			</Routes>
		</Router>
	);

}
export default App;
