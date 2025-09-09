import React, { useEffect, useState } from 'react';
import { axiosfile } from '../../../utils/axiosfile';
 import Trailer from 'movie-trailer'
 import YouTube from 'react-youtube'
import './Row.css'
import { requests } from '../../../utils/requests';
const Row = ({title, fetchurl, islargerow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl]=useState("");
  const base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    // Moved the async function inside useEffect to handle fetching
    const fetchMovies = async () => {
      try {
        // The API call is now in the 'try' block, where it should be
        const response = await axiosfile.get(fetchurl);
        
        // This line now logs the data correctly
        console.log("Fetched data:", response.data.results);
        
        setMovies(response.data.results);
      } catch (error) {
        // This block will run only if the API call fails
        console.error('Error fetching data:', error);
      }
    }; 
    
    // Call the async function here
    fetchMovies();
    // The dependency array ensures the effect runs only when fetchurl changes
  }, [fetchurl]);

   // Options for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };
  // Function to handle poster clicks
  const handleClick = async (movie) => {
    if (trailerUrl) {
      // If a trailer is already open, close it
      setTrailerUrl(''); 
    } else {
      try {
        // Fetch the video data for the specific movie
     const response = await axiosfile.get(requests.fetchMovieVideos(movie.id));
        // Find the official YouTube trailer from the video list
        const trailer = response.data.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );

        if (trailer) {
          setTrailerUrl(trailer.key);
        } else {
          console.log("No trailer found for this movie.");
        }

      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    }
  };

  return (
    <div className='row'> 
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies.map((movie) => (
          <img 
            key={movie.id} 
            onClick={() => handleClick(movie)} // Add the click handler
            // Corrected the template literal for the class name
            className={`row_poster ${islargerow && "row_posterLarge"}`}
             // Corrected the image source to use the original path
            src={`${base_url}${islargerow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} 
            // className = {`row_poster $ {isLargeRow && "row_posterLarge"}`}
          />
        ))} 
      </div>
         {/* Conditionally render the YouTube player if a trailer exists */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    
    </div>
  );
};

export default Row;