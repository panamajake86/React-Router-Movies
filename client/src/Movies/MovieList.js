import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  // const { title, director, metascore, stars } = movie;
  // console.log(movie);
  return (
    <MovieCard movie={movie}  />
  );
}

export default MovieList;
