import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

class News extends Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: [], loading: false, page: 1
		}
	}

	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5acfa1fe3b274374a6a1509189693d5c&page= 1&pageSize = ${this.props.pageSize}`;
		this.setState({loading:true})
		let data = await fetch(url)
		let parsedData = await data.json()
		this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
	}

	handlePrevClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5acfa1fe3b274374a6a1509189693d5c&page=${this.state.page - 1}&pageSize = ${this.props.pageSize}`;
		let data = await fetch(url)
		let parsedData = await data.json()
		this.setState({loading: true})
		this.setState({})
		this.setState({
			page: this.state.page - 1, articles: parsedData.articles, loading: false
		})

	}

	handleNextClick = async () => {
		if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
			let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5acfa1fe3b274374a6a1509189693d5c&page=${this.state.page + 1}&pageSize = 
			${this.props.pageSize}`;
			this.setState({loading:true});
			let data = await fetch(url)
			let parsedData = await data.json()
			this.setState({
				page: this.state.page + 1, articles: parsedData.articles, loading: false
			})
		}

	}


	render() {
		return (<div className="container my-3">
			<h1 className="text-center">Charcha Begins with Top Headlines</h1>
			{this.state.loading && <Spinner/>}
			<div className="row">
				{!this.state.loading && this.state.articles.map((element) => {
					return <div className="col-md-4" key={element.url}>
						<NewsItem
							title={element.title?.slice(0, 80)}
							description={element.description?.slice(0, 100)}
							imageUrl={element.urlToImage}
							newsUrl={element.url}
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