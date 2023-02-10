import React, {useState,useEffect} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const pageSize = 15;

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // const [loading, setLoading] = useState(false)
    // const [pageSize, setPageSize] = useState(15)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updateNews = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
        // setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let newData = await data.json();
        props.setProgress(70);
        // console.log(newData);
        setArticles(newData.articles)
        setTotalResults(newData.totalResults)
        // setLoading(false)
        props.setProgress(100);
    }

    // handlePrev = async ()=> {
    //     await this.setState({page: page-1});
    //     this.updateNews();
    // } 
    
    // handleNext = async ()=> {
    //     await this.setState({page: page+1});
    //     this.updateNews();
    // }

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let newData = await data.json();
        setArticles(articles.concat(newData.articles))
        setTotalResults(newData.totalResults)
    }; 

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
        updateNews();
        // eslint-disable-next-line
    }, [])
    
    // const componentDidMount = async() => {
        
    //     // console.log(newData);
    // }

    return (
      <>
        <h3 className='text-center mt-5 pt-4'>News Monkey - Latest Updates from All over the world...!</h3>
        {/* {loading && <Spinner/>} */}

            <InfiniteScroll 
            dataLength={ articles.length } 
            next={fetchMoreData } 
            hasMore={ articles.length !== totalResults }
            loader={<Spinner/>}>
                <div className='container'>
                    <div className="row">
                        {articles.map((e,i) => {
                            return <div className="col-md-4" key={i}>
                            <NewsItem 
                                title={e.title?e.title.slice(0,90):""} 
                                desc={e.description?e.description.slice(0,120):""} 
                                imgUrl={e.urlToImage} 
                                newsUrl={e.url}
                                source={e.source.name}
                                date={e.publishedAt}/>
                                
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* {!loading && <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Prev</button>
                <button disabled={page+1 > Math.ceil(totalResults/pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
            </div>} */}
      </>
    )
}

News.defaultProps = {
    //Default Properties
    country: 'in',
    category: 'general'
}

News.propTypes = {
    //Default Proptypes
    country: PropTypes.string,
    category: PropTypes.string
}

export default News