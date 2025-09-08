import React, { useEffect, useState } from 'react';
// Correct import: using curly braces {requests}
import { requests } from '../../utils/requests.js'; 
import { axiosfile } from '../../utils/axiosfile.js';

const Requests = () => {
  // We're now fetching movies, so let's use a more descriptive state name
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Updated the endpoint to fetch popular movies
        const response = await axiosfile.get(requests.fetchpopular);
        
        // The movie data is in the 'results' property of the response
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading Movies...</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            {/* We now use 'original_title' for the movie title */}
            <h2>{movie.original_title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;