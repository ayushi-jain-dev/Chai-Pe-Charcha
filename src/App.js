import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import Header from "./components/header/header";
import {Footer} from "./components/footer/footer";
import News from "./pages/news/news";
import {Blogs} from "./pages/blogs/blogs";
import {BlogDetails} from "./pages/blog-details/blog-details";

import './App.css';

const App = () => {
	const pageSize = 15;
	const apiKey = process.env.REACT_APP_NEWS_API;
	const country = "in";
	const [progress, setProgress] = useState(0);

	return (
		<Router>
			<Header/>
			<LoadingBar
				height={3}
				color='#f11946'
				progress={progress}
			/>
			<Routes>
				<Route
					exact
					path="/"
					element={<Blogs/>}
				/>
				<Route
					exact
					path="/news"
					element={<News
						setProgress={setProgress} apiKey={apiKey} key="general"
						pageSize={pageSize}
						country={country}
						category="general"
					/>}
				/>
				<Route
					exact
					path="/blogs"
					element={<Blogs/>}
				/>
				<Route
					exact
					path="/blog/:id"
					element={<BlogDetails/>}
				/>
			</Routes>
			<Footer/>
		</Router>
	);
}
export default App;
