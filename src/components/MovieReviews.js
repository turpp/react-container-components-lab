// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({title, summary, img}) =>{
    return <div className='review-list'>
        <h3>{title}</h3>
        <img src={img} alt={title}/>
        <p>{summary}</p>
    </div>
}

export default MovieReviews