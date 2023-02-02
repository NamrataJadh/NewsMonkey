import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

class News extends Component {
    static defaultProps = {
        //Default Properties
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        //Default Properties
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            pageSize:15
        }
    }

    handlePrev = async ()=> {
        console.log('Loading Previous Page.....')
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a7b2fc51ab64ad49ccbf234cdc63c2e&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let newData = await data.json();
        console.log(newData);
        this.setState({
            articles: newData.articles,
            page: this.state.page-1,
            loading: false
        })
    } 
    
    handleNext = async ()=> {
        console.log('Loading Next Page.....')
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a7b2fc51ab64ad49ccbf234cdc63c2e&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let newData = await data.json();
        console.log(newData);
        this.setState({
            articles: newData.articles,
            page: this.state.page+1,
            loading: false
        })
        
    }

    async componentDidMount(){
        console.log('On Mount...')
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a7b2fc51ab64ad49ccbf234cdc63c2e&${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let newData = await data.json();
        console.log(newData);
        this.setState({
            articles: newData.articles,
            totalResults: newData.totalResults,
            loading: false
         })
    }

  render() {
    return (
      <div className='container my-5 pt-4'>
        <h3 style={{margin: '1rem'}}>News Monkey - Latest Updates from All over the world...!</h3>
        {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((e) => {
                    return <div className="col-md-4" key={e.url}>
                    <NewsItem title={e.title?e.title.slice(0,100):""} desc={e.description?e.description.slice(0,240):""} imgUrl={e.urlToImage} newsUrl={e.url}/>
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