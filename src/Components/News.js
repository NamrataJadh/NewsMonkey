import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

class News extends Component {
    static defaultProps = {
        //Default Properties
        // country: 'in',
        category: 'general'
    }

    static propTypes = {
        //Default Properties
        country: PropTypes.string,
        category: PropTypes.string
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            pageSize:15
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a7b2fc51ab64ad49ccbf234cdc63c2e&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let newData = await data.json();
        this.setState({
            articles: newData.articles,
            totalResults: newData.totalResults,
            loading: false
        })
    }

    handlePrev = async ()=> {
        await this.setState({page: this.state.page-1});
        this.updateNews();
    } 
    
    handleNext = async ()=> {
        await this.setState({page: this.state.page+1});
        this.updateNews();
    }

    async componentDidMount(){
        this.updateNews();
        // console.log(newData);
    }

  render() {
    return (
      <div className='container text-center p-4'>
        <h3 style={{margin: '1.5rem'}}>News Monkey - Latest Updates from All over the world...!</h3>
        {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((e) => {
                    return <div className="col-md-4" key={e.url}>
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
            {!this.state.loading && <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Prev</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
            </div>}
      </div>
    )
  }
}

export default News