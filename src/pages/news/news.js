import React, {useEffect, useState} from 'react';
import NewsItem from "../../components/news-item/news-item";
import Spinner from "../../components/spinner/spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState([true])
	const [page, setPage] = useState(1)
	const [totalResults, setTotalResults] = useState(0)

	const capitalizeFirstLetter = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	const updateNews = async () => {
		props.setProgress(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
		&page=${page}&pageSize = ${props.pageSize}`;
		setLoading(true)
		let data = await fetch(url)
		props.setProgress(50);
		let parsedData = await data.json()
		setArticles(parsedData.articles)
		setTotalResults(parsedData.totalResults)
		setLoading(false)
		props.setProgress(100)
	}

	useEffect(() => {
		document.title = `Charcha Begins on ${capitalizeFirstLetter(props.category)}`;
		updateNews();
		//eslint-disable-next-line
	}, [])

	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
		&page=${page + 1}&pageSize = ${props.pageSize}`;
		setPage(page + 1)
		let data = await fetch(url)
		let parsedData = await data.json()
		setArticles(articles.concat(parsedData.articles))
		setTotalResults(parsedData.totalResults)
	};

	return (
		<>
			<h2 className="text-center" style={{marginTop: '90px'}}>Charcha Begins with
				Top {capitalizeFirstLetter(props.category)} Headlines</h2>
			{loading && <Spinner/>}
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Spinner/>}
			>
				<div className="container">
					<div className="row">
						{articles.map((element) => {
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

News.defaultProps = {
	country: "in",
	pageSize: [5],
	category: 'general'
}

News.propTypes = {
	country: propTypes.string,
	pageSize: propTypes.number,
	category: propTypes.string
}
export default News;