import React from 'react'

const NewsItem =(props) => {
    let { title, description, imageUrl, newsUrl, date, source } = props;
    return (
      <div className='my-5'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://imgs.hipertextual.com/wp-content/uploads/2023/06/DSC06392-scaled.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{ left: '85%' }}>{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div>
              <span className="badge text-bg-dark">{date}</span>
            </div>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark my-3">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
