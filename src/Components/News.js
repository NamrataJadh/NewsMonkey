import React, { Component } from 'react'
import NewsItem from './NewsItem';

class News extends Component {
  constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            pageSize:20
        }
    }

    handlePrev = async ()=> {
        console.log('Loading Previous Page.....')
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a7b2fc51ab64ad49ccbf234cdc63c2e&page=${this.state.page-1}&${this.state.pageSize}`;
        let data = await fetch(url);
        let newData = await data.json();
        console.log(newData);
        this.setState({
            articles: newData.articles,
            page: this.state.page-1
        })
    } 
    
    handleNext = async ()=> {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)){
            console.log('No Further Articles..')
            alert('No Further Articles..')
        }
        else{
            console.log('Loading Next Page.....')
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a7b2fc51ab64ad49ccbf234cdc63c2e&page=${this.state.page+1}&${this.state.pageSize}`;
            let data = await fetch(url);
            let newData = await data.json();
            console.log(newData);
            this.setState({
                articles: newData.articles,
                page: this.state.page+1
            })
        }
    }

    async componentDidMount(){
        console.log('On Mount...')
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a7b2fc51ab64ad49ccbf234cdc63c2e&${this.state.page}&${this.state.pageSize}`;
        let data = await fetch(url);
        let newData = await data.json();
        console.log(newData);
        this.setState({
            articles: newData.articles,
            totalResults: newData.totalResults
         })
    }

  render() {
    return (
      <div className='container my-5 pt-4'>
        <h3>News Monkey - Latest Updates from All over the world...!</h3>
            <div className="row">
                {this.state.articles.map((e) => {
                    return <div className="col-md-4" key={e.url}>
                    <NewsItem title={e.title?e.title.slice(0,60):""} desc={e.description?e.description.slice(0,110):""} imgUrl={e.urlToImage} newsUrl={e.url}/>
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Prev</button>
                <button type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}

export default News