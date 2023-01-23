import React, { Component } from 'react'
import NewsItem from './NewsItem';


class News extends Component {
  render() {
    return (
      <div className='container my-2'>
        <h3>News Monkey - Latest Updates from All over the world...!</h3>
            <div className="row">
                <div className="col-md-4">
                        <NewsItem/>
                </div>
                <div className="col-md-4">
                        <NewsItem/>
                </div>
                <div className="col-md-4">
                        <NewsItem/>
                </div>
            </div>
      </div>
    )
  }
}

export default News