import React, {useEffect, useState} from "react";
import {Element} from 'react-scroll';

import './blogs.scss';

export const Blogs = (props) => {
	const [blogs, setBlogs] = useState(null);
	const [events, setEvents] = useState([]);
	const [jobs, setJobs] = useState([]);
	const [news, setNews] = useState([]);
	const blogsApi = async () => {
		fetch("/data/blogs.json")
			.then(response => response.json())
			.then(data => {
				setBlogs(data);
			})
			.catch(error => {
				console.error('Error fetching the JSON file:', error);
			});
	}

	const eventsApi = async () => {
		fetch("/data/events.json")
			.then(response => response.json())
			.then(data => {
				setEvents(data?.events);
			})
			.catch(error => {
				console.error('Error fetching the JSON file:', error);
			});
	}

	const jobsApi = async () => {
		fetch("/data/jobs.json")
			.then(response => response.json())
			.then(data => {
				setJobs(data?.jobs);
			})
			.catch(error => {
				console.error('Error fetching the JSON file:', error);
			});
	}

	const newsApi = async () => {
		fetch("/data/news.json")
			.then(response => response.json())
			.then(data => {
				setNews(data?.news);
			})
			.catch(error => {
				console.error('Error fetching the JSON file:', error);
			});
	}

	const imageUrl = (url) => {
		return require(`../../assets/images/blog/${url}`);
	}

	useEffect(() => {
		blogsApi();
		eventsApi();
		jobsApi();
		newsApi();
	}, []);

	const formatDate = (inputDate) => {
		const date = new Date(inputDate);
		const options = {year: 'numeric', month: 'long', day: 'numeric'};
		return date.toLocaleDateString('en-US', options);
	}

	return (<main className="blogs-page">
		<Element name="hero-section" className="section">
			<section className="hero">
				<div className="hero-content">
					<h1>Welcome to Event Catalyst</h1>
					<p>Explore the world of insightful and engaging blogs.</p>
				</div>
			</section>
		</Element>

		{/* Blogs */}
		<Element name="blogs-section" className="section">
			<section className="segments">
				<div className="segment">
					<div className="segment-header">
						<h2>Technology & Innovation</h2>
						<p>Discover the latest trends in Technology, Gadgets, and Innovation.</p>
					</div>
					<div className="segment-body">
						{blogs?.techblogs.map(blog => (<div className="sub-segment" key={blog.id}>
							<h4>{blog.title}</h4>
							<p className="author-name"><strong>{blog.author}</strong></p>
							<p className="publication-date"><strong>Date: </strong>{formatDate(blog.date)}</p>
							<p>{blog.content}<a href='/' target="_blank" className="card-link" rel="noreferrer">Read More</a></p>
						</div>))}</div>
				</div>

				<div className="segment">
					<div className="segment-header"><h2>Art & Creativity</h2>
						<p>Explore the realms of Art, Culture, and Creativity.</p></div>
					<div className="segment-body">{blogs?.artblogs.map(blog => (<div className="sub-segment" key={blog.id}>
						<h4>{blog.title}</h4>
						<p className="author-name"><strong>{blog.author}</strong></p>
						<p className="publication-date"><strong>Date: </strong>{formatDate(blog.date)}</p>
						<p>
							{blog.content}<a href='/' target="_blank" className="card-link" rel="noreferrer">Read More</a>
						</p>
					</div>))}</div>
				</div>

				<div className="segment">
					<div className="segment-header"><h2>Travel & Exploration</h2>
						<p>Dive into the fascinating worlds of Travel, Adventure, and Exploration.</p></div>
					<div className="segment-body">{blogs?.travelblogs.map(blog => (<div className="sub-segment" key={blog.id}>
						<h4>{blog.title}</h4>
						<p className="author-name"><strong>{blog.author}</strong></p>
						<p className="publication-date">Date: {formatDate(blog.date)}</p>
						<p>{blog.content}<a href='/' target="_blank" className="card-link" rel="noreferrer">Read More</a>
						</p>
					</div>))}</div>
				</div>
			</section>
		</Element>

		{/* News */}
		<Element name="news-section" className="section">
			<section className="news-feed">
				<div className="segment-header"><h2>Latest News</h2></div>
				<div className="news-list">
					{news.map(newsItem => (<div className="news-item" key={newsItem.id}>
						<h4>{newsItem.title}</h4>
						<p className="publication-date"><strong>Publication Date: </strong>{formatDate(newsItem.date)}</p>
						<p className="excerpt">
							{newsItem.description}
							<a href='/' target="_blank" className="card-link"
								 rel="noreferrer">Read More</a>
						</p>
					</div>))}
				</div>
			</section>
		</Element>

		{/* Events */}
		<Element name="events-section" className="section">
			<section className="events">
				<div className="segment-header"><h2>Upcoming Events</h2></div>
				<div className="event-list">
					{events.map(eventItem => (<div className="event-item" key={eventItem.id}>
						<h4>{eventItem.title}</h4>
						<p className="event-date"><strong>Date: </strong>{formatDate(eventItem.date)}</p>
						<p className="event-location"><strong>Location: </strong>{eventItem.location}</p>
						<p className="event-description">
							{eventItem.description}
							<a href='/' target="_blank"
								 className="card-link"
								 rel="noreferrer">Learn More</a>
						</p>
					</div>))}
				</div>
			</section>
		</Element>

		{/* Jobs */}
		<Element name="jobs-section" className="section">
			<section className="jobs">
				<div className="segment-header"><h2>Job Postings</h2></div>
				<div className="job-list">
					{jobs.map(jobItem => (<div className="job-item" key={jobItem.id}>
						<h4>{jobItem.title}</h4>
						<p className="company"><strong>Company: </strong>{jobItem.company}</p>
						<p className="location"><strong>Location: </strong>{jobItem.location}</p>
						<p className="description">
							{jobItem.description}
							<a href='/' target="_blank" className="card-link" rel="noreferrer">
								Apply Now
							</a>
						</p>
					</div>))}
				</div>
			</section>
		</Element>
	</main>);
}