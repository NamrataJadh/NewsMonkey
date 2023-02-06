import React, { Component } from 'react'

class NewsItem extends Component {

  render() {
    let {title, desc, imgUrl, newsUrl, source, date} = this.props;
    return (
      <div>
        <div className="card my-4" style={{width: '24rem', height: '32rem'}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="Unavailable..." style={{height: '14rem'}} />
            <div className="card-body d-flex flex-column mb-4 justify-content-evenly">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{desc}...</p>
              <p className="card-text"><small className="text-muted">Last updated {new Date(date).toUTCString()}</small></p>
              <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary align-self-center">Read More...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem