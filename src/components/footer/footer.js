import {Link} from "react-router-dom";
import facebookIcon from '../../assets/images/blog/facebook.png';
import twitterIcon from '../../assets/images/blog/twitter.png';
import instagramIcon from '../../assets/images/blog/instagram.png';

import './footer.scss';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer-links">
				<Link to="/">About Us</Link>
				<Link to="/">Contact</Link>
				<Link to="/">Privacy Policy</Link>
				<Link to="/">Terms of Service</Link>
			</div>
			<div className="social-media">
				<a href="https://www.facebook.com/" className="social-icon"><img src={facebookIcon} alt="Facebook"/></a>
				<a href="https://twitter.com/" className="social-icon"><img src={twitterIcon} alt="Twitter"/></a>
				<a href="https://www.instagram.com/" className="social-icon"><img src={instagramIcon} alt="Instagram"/></a>
			</div>
			<div className="center">
				Copyright &copy; Event Catalyst. All rights reserved
			</div>
		</footer>
	)
}