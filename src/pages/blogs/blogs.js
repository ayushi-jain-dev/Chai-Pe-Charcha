import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Element} from 'react-scroll';

export const Blogs = (props) => {
	const imgBaseUrl = '../../assets/images/blog';
	const [blogs, setBlogs] = useState([]);
	const [events, setEvents] = useState([]);
	const [jobs, setJobs] = useState([]);
	const [news, setNews] = useState([]);
	const blogsApi = async () => {
		fetch("/data/blogs.json")
			.then(response => response.json())
			.then(data => {
				setBlogs(data?.blogs);
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

	return (
		<main className="blogs-page">
			<Element name="hero-section" className="section">
				<section className="hero">
					<div className="hero-content">
						<h1>Welcome to Event Catalyst</h1>
						<p>Explore the world of insightful and engaging blogs.</p>
						<div className="blogs">
							<Link to="/" className="cta-button">Explore Blogs</Link>
						</div>
					</div>
					<img src={`${imgBaseUrl}/image 2.avif`} alt="Banner Image"/>
				</section>
			</Element>

			{/* Blogs */}
			<Element name="blogs-section" className="section">
				<section className="segments">
					<div className="segment">
						<img src={`${imgBaseUrl}/Segment 1.jpeg`} alt="Segment 1 Icon"/>
						<h2>Segment 1</h2>
						<p>Discover the latest trends in Technology, Gadgets, and Innovation.</p>
						<div className="sub-segments">
							<div className="sub-segment">
								<img src={`${imgBaseUrl}/subsegment 1.jpeg`} alt="Sub-Segment 1 Icon"/>
								<h3>Sub-Segment 1</h3>
								<p>Exploring cutting-edge gadgets and futuristic technologies.</p>
							</div>
							<div className="sub-segment">
								<img src={`${imgBaseUrl}/subsegment2.jpeg`} alt="Sub-Segment 2 Icon"/>
								<h3>Sub-Segment 2</h3>
								<p>Diving deep into artificial intelligence and machine learning.</p>
							</div>
						</div>
					</div>

					<div className="segment">
						<img src={`${imgBaseUrl}Segment2.jpeg`} alt="Segment 2 Icon"/>
						<h2>Segment 2</h2>
						<p>Explore the realms of Art, Culture, and Creativity.</p>
						<div className="sub-segments">
							<div className="sub-segment">
								<img src={`${imgBaseUrl}/subsegment3.avif`} alt="Sub-Segment 3 Icon"/>
								<h3>Sub-Segment 3</h3>
								<p>Unleashing artistic expressions across various mediums.</p>
							</div>
							<div className="sub-segment">
								<img src={`${imgBaseUrl}/subsegment4.avif`} alt="Sub-Segment 4 Icon"/>
								<h3>Sub-Segment 4</h3>
								<p>Exploring the fusion of technology and art in the digital era.</p>
							</div>
						</div>
					</div>

					<div className="segment">
						<img src="images/segment 3.avif" alt="Segment 3 Icon"/>
						<h2>Segment 3</h2>
						<p>Dive into the fascinating worlds of Travel, Adventure, and Exploration.</p>
						<div className="sub-segments">
							<div className="sub-segment">
								<img src="images/subsegment 5.avif" alt="Sub-Segment 5 Icon"/>
								<h3>Sub-Segment 5</h3>
								<p>Discovering hidden gems and off-the-beaten-path destinations.</p>
							</div>
							<div className="sub-segment">
								<img src="images/subsegment6.avif" alt="Sub-Segment 6 Icon"/>
								<h3>Sub-Segment 6</h3>
								<p>Embarking on adrenaline-pumping adventures around the globe.</p>
							</div>
						</div>
					</div>
				</section>
			</Element>

			{/* News */}
			<Element name="news-section" className="section">
				<section className="news-feed">
					<h2>Latest News</h2>
					<div className="news-list">
						{news.map(newsItem => (
							<div className="news-item" key={newsItem.id}>
								<h3>{newsItem.title}</h3>
								<p className="publication-date">Publication Date: {formatDate(newsItem.date)}</p>
								<p className="excerpt">{newsItem.description}</p>
								<Link to="/" className="read-more">Read More</Link>
							</div>
						))}
					</div>
				</section>
			</Element>

			{/* Events */}
			<Element name="events-section" className="section">
				<section className="events">
					<h2>Upcoming Events</h2>
					<div className="event-list">
						<div className="event-item">
							<h3>Event Title 1</h3>
							<p className="event-date">Date: June 15, 2023</p>
							<p className="event-location">Location: City, Country</p>
							<p className="event-description">A brief description of the event goes here.</p>
							<a href="#" className="learn-more">Learn More</a>
						</div>
						<div className="event-item">
							<h3>Event Title 2</h3>
							<p className="event-date">Date: July 5, 2023</p>
							<p className="event-location">Location: City, Country</p>
							<p className="event-description">Another brief description of the event goes here.</p>
							<a href="#" className="learn-more">Learn More</a>
						</div>
					</div>
				</section>
			</Element>

			{/* Jobs */}
			<Element name="jobs-section" className="section">
				<section className="jobs">
					<h2>Job Postings</h2>
					<div className="job-list">
						<div className="job-item">
							<h3>Job Title 1</h3>
							<p className="company">Company: ABC Technologies</p>
							<p className="location">Location: City, Country</p>
							<p className="description">A brief description of the job position goes here.</p>
							<a href="#" className="apply-now">Apply Now</a>
						</div>
						<div className="job-item">
							<h3>Job Title 2</h3>
							<p className="company">Company: XYZ Solutions</p>
							<p className="location">Location: City, Country</p>
							<p className="description">Another brief description of the job position goes here.</p>
							<a href="#" className="apply-now">Apply Now</a>
						</div>
					</div>
				</section>
			</Element>
		</main>
	)
}