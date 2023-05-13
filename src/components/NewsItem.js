import React, {Component} from 'react';
import dummy from './dummy.jpg'

import "./NewsItem.scss";

class NewsItem extends Component {

	render() {
		let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
		return (<div className="news-item-component my-3">
			<div className="card">
				<span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style ={{left: '85%', zIndex: '1'}}>{source}</span>
				<img src={imageUrl ? imageUrl : dummy} className="card-img-top" alt="..." height={300} width={300}/>
				<div className="card-body">
					<h5 className="card-title">{title}...</h5>
					<p className="card-text">
						{description}...<a href={newsUrl} target="_blank" className="card-link" rel="noreferrer">Read More</a>
					</p>
					<p className="card-text"><small
						className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
					</p>
				</div>
			</div>
		</div>);
	}
}

export default NewsItem;