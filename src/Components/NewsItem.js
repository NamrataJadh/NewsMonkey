import React from 'react'
import No_Image from './assets/No_Image.jpeg'

const NewsItem = (props) => {

    let {title, desc, imgUrl, newsUrl, source, date} = props;
    let backupImg = No_Image

    return (
        <div className="card my-5 newsItem_style text-center">
              <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
                {source}
              </span>
              <img src={imgUrl?imgUrl:backupImg} className="card-img-top" alt="Unavailable..." style={{height: '14rem'}} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desc?desc:title}...</p>
                <a href={newsUrl} target="_blank" rel='noreferrer' 
                  className="btn btn-sm btn-primary align-self-center">Read More...</a>
              </div>
              <p className="card-text mb-3"><sub className="text-muted">Last updated: {new Date(date).toUTCString()}</sub></p>
        </div>
    )
}

export default NewsItem