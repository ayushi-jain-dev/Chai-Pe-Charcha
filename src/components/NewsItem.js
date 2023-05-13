import React, {Component} from 'react';
import dummy from './dummy.jpg'

import "./NewsItem.scss";

class NewsItem extends Component {

	render() {
		let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
		return (<div className="news-item-component my-3">
			<div className="card">
				<div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
					<span className=" badge rounded-pill bg-primary"
								style={{left: '85%', zIndex: '1'}}>{source}</span></div>
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