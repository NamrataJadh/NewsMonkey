import React, { Component } from 'react'

class NewsItem extends Component {

  render() {
    let {title, desc, imgUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card my-4" style={{width: '24rem', height: '35rem'}}>
          <img src={imgUrl} className="card-img-top" alt="Unavailable..." style={{height: '14rem'}}/>
            <div className="card-body d-flex flex-column mb-4 justify-content-between">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{desc}...</p>
              <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary align-self-center">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem