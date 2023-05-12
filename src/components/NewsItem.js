import React, {Component} from 'react';
import dummy from './dummy.jpg'
class NewsItem extends Component {

	render() {
		let {title, description, imageUrl, newsUrl} = this.props;
		return (
			<div className="my-3">
				<div className="card" >
					<img src={imageUrl ? imageUrl : dummy} className="card-img-top" alt="..." height ={300} width = {300}/>
						<div className="card-body">
							<h5 className="card-title">{title}...</h5>
							<p className="card-text">{description}...</p>
							<a href={newsUrl} target = "_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
						</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;