

import React from 'react'

const NewsItem =(props)=> {
 
    let {title , description,imageUrl,newsUrl,author,date,source}=props;
    
    return (
      <div>
        <div className="card my-2">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ marginLeft: "-20vw"}}> {source} </span>
        <img src={imageUrl?imageUrl:"https://s.w-x.co/util/image/w/ec03f117a49f81cacf636b65efd0e6dc.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Known":author} On {date}</small> </p>

            <a href={newsUrl} target="_blank " className="btn btn-success btn-sm">Read More</a>
        </div>
        </div>
      </div>
    )
  
}
export default NewsItem;