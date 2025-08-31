import React from 'react'

const NewsItem =(props)=>{
    
        let{title, description, imageUrl, newsurl, date, source}=props
        return (
            <div className="container my-3">
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" style={{ height:"200px"}} alt = "Not accesible..."
                      />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{fontSize:"15px"}}>{description}</p>
                        <p className="card-text"><small className="text-muted fst-italic">{new Date(date).toGMTString()}</small></p>
                        <div className='d-flex justify-content-between' style={{ gap:"10px"}}>
                        <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
                         <span className="badge text-bg-dark my-2 text-wrap" style={{height:"25px"}}>{source.slice(0,25)}</span>
                         </div>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
