import React from 'react';
import {Link} from 'react-scroll';

const Header = () => {
	return (
		<header className="fixed-top">
			<div className="navcenter">
				<div id="logo">
					<h2>Blogs Website</h2>
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
								duration={500}
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
								duration={500}
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
								duration={500}
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
								duration={500}
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
								duration={500}
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
