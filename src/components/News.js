import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {

	static defaultProps = {
		country: "in",
		pageSize: [5],
		category: 'general'

	}

	static propTypes = {
		country: propTypes.string,
		pageSize: propTypes.number,
		category: propTypes.string
	}
	capitalizeFirstLetter = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	constructor(props) {
		super(props);
		this.state = {
			articles: [], loading: true, page: 1, totalResults: 0
		}
		document.title = `Charcha Begins on ${this.capitalizeFirstLetter(this.props.category)}`;
	}

	async updateNews() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=
	5acfa1fe3b274374a6a1509189693d5c&page=${this.state.page}&pageSize = ${this.props.pageSize}`;
		this.setState({loading: true})
		let data = await fetch(url)
		let parsedData = await data.json()
		this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
	}

	async componentDidMount() {
		this.updateNews();
	}

	fetchMoreData = async () => {
		this.setState({page: this.state.page + 1})
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=
	5acfa1fe3b274374a6a1509189693d5c&page=${this.state.page}&pageSize = ${this.props.pageSize}`;
		let data = await fetch(url)
		let parsedData = await data.json()
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,
		})
	};


	render() {
		return (
			<>
				<h2 className="text-center">Charcha Begins with
					Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
				{this.state.loading && <Spinner/>}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Spinner/>}
				>
					<div className="container">
						<div className="row">
							{this.state.articles.map((element) => {
								return <div className="col-md-4" key={element.url}>
									<NewsItem
										title={element.title?.slice(0, 80)}
										description={element.description?.slice(0, 80)}
										imageUrl={element.urlToImage}
										newsUrl={element.url}
										author={element.author}
										date={element.publishedAt}
										source={element.source.name}
									/>
								</div>
							})}
						</div>
					</div>
				</InfiniteScroll>
			</>
		);
	}
}

export default News;