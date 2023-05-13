import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";


class News extends Component {

	static defaultProps = {
		country: "in",
		pageSize:[5],
		category:'general'

}

static propTypes = {
	country: propTypes.string,
	pageSize: propTypes.number,
	category: propTypes.string
}
	capitalizeFirstLetter = (str) =>{
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	constructor(props) {
		super(props);
		this.state = {
			articles: [], loading: false, page: 1
		}
		document.title= `Charcha Begins on ${this.capitalizeFirstLetter(this.props.category)} `;
	}

async updateNews(){
	const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=
	5acfa1fe3b274374a6a1509189693d5c&page=${this.state.page}&pageSize = ${this.props.pageSize}`;
	this.setState({loading:true})
	let data = await fetch(url)
	let parsedData = await data.json()
	this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
}

	async componentDidMount() {
		this.updateNews();
	}

	handlePrevClick = async () => {
	this.setState({page: this.state.page - 1});
	this.updateNews();
	}

	handleNextClick = async () => {
		this.setState({page: this.state.page + 1});
		this.updateNews();
	}


	render() {
		return (<div className="container my-3">
			<h2 className="text-center">Charcha Begins with Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
			{this.state.loading && <Spinner/>}
			<div className="row">
				{!this.state.loading && this.state.articles.map((element) => {
					return <div className="col-md-4" key={element.url}>
						<NewsItem
							title={element.title?.slice(0, 80)}
							description={element.description?.slice(0, 80)}
							imageUrl={element.urlToImage}
							newsUrl={element.url}
							author={element.author}
							date={element.publishedAt}
							source ={element.source.name}
						/>
					</div>
				})}
				<div className="container d-flex justify-content-between">
					<button disabled={this.state.page <= 1} type="button" className="btn btn-dark"
									onClick={this.handlePrevClick}> &larr; Previous
					</button>
					<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
									type="button"
									className="btn btn-dark"
									onClick={this.handleNextClick}
					>
						Next &rarr;</button>

				</div>
			</div>
		</div>);
	}
}

export default News;