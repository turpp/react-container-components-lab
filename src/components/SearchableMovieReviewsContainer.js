import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component{
    state={
        reviews: [],
        searchTerm: ''
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        fetch(`${URL+'&query='+event.target.search.value}`).then(resp => resp.json()).then(json=>{
            console.log(json)
            this.setState({
                reviews: json.results
            })
        })
    }
    handleChange=(event)=>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    showMovies=()=>{
        return this.state.reviews.map(movie=> <MovieReviews key={movie.display_title} title={movie.display_title} summary={movie.summary_short} img={movie.multimedia.src}/>)

    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
            <input type='text' name='search' value={this.state.searchTerm} onChange={this.handleChange}/>
            <input type='submit' value='Submit'/>
            </form>
            <div className='searchable-movie-reviews'>
                {this.showMovies()}
            </div>
        </div>
    }


}