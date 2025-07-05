import React from 'react'
import img from "../assets/images.png";

const News = ({title,description,src,url}) => {
  return (
   <div className="card bg-dark text-light mb-3 d-inline-block my-5 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:img} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"No description available. Check out the link to know more about this news."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default News
