import React, { Component } from 'react'

class NewsItem extends Component {

  render() {
    let {title, desc, imgUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card my-4" style={{width: '24rem'}}>
          <img src={imgUrl} className="card-img-top" alt="Image Unavailable..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{desc}...</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem