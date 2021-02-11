import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component{
    state={
        reviews: []
    }

    componentDidMount(){
        fetch(`${URL}`).then(resp=> resp.json()).then(json=>{
            this.setState({
                reviews: json.results
            })
        })
    }

    showMovies = () => {
        return this.state.reviews.map(movie=> <MovieReviews key={movie.display_title} title={movie.display_title} summary={movie.summary_short} img={movie.multimedia.src}/>)
    }


    render(){
       return  <div className='latest-movie-reviews'>{this.showMovies()}</div>
    }

}