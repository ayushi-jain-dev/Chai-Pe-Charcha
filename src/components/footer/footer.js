import facebookIcon from '../../assets/images/blog/facebook.png';
import twitterIcon from '../../assets/images/blog/twitter.png';
import instagramIcon from '../../assets/images/blog/instagram.png';

export const Footer = () => {
	return (
		<footer>
			<div className="footer-links">
				<a href="#">About Us</a>
				<a href="#">Contact</a>
				<a href="#">Privacy Policy</a>
				<a href="#">Terms of Service</a>
			</div>
			<div className="social-media">
				<a href="https://www.facebook.com/" className="social-icon"><img src={facebookIcon} alt="Facebook"/></a>
				<a href="https://twitter.com/" className="social-icon"><img src={twitterIcon} alt="Twitter"/></a>
				<a href="https://www.instagram.com/" className="social-icon"><img src={instagramIcon} alt="Instagram"/></a>
			</div>
		</footer>
	)
}