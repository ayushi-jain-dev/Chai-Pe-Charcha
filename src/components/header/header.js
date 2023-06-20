import React from 'react';
import {Link} from 'react-scroll';
import './header.scss';

const Header = () => {
	return (
		<header className="header-component fixed-top">
			<div className="navcenter">
				<div id="logo">
					<h2>Event Catalyst</h2>
				</div>
				<nav id="navbar">
					<ul>
						<li>
							<Link
								activeClass="active"
								to="hero-section"
								spy={true}
								smooth={true}
								offset={-70}
								duration={100}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								activeClass="active"
								to="blogs-section"
								spy={true}
								smooth={true}
								offset={-70}
								duration={100}
							>
								Blogs
							</Link>
						</li>
						<li>
							<Link
								activeClass="active"
								to="news-section"
								spy={true}
								smooth={true}
								offset={-70}
								duration={100}
							>
								News
							</Link>
						</li>
						<li>
							<Link
								activeClass="active"
								to="events-section"
								spy={true}
								smooth={true}
								offset={-70}
								duration={100}
							>
								Events
							</Link>
						</li>
						<li>
							<Link
								activeClass="active"
								to="jobs-section"
								spy={true}
								smooth={true}
								offset={-70}
								duration={100}
							>
								Jobs
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
export default Header;
