import React, { useEffect, useState } from 'react';
// The `requests` file uses `export default`, so no curly braces are needed
import {requests} from '../../utils/requests.js'; 
import { axiosfile } from '../../utils/axiosfile.js';
import "./Banner.css"

const Banner = () => {
  // State to hold the single, randomly selected movie for the banner
  const [bannerMovie, setBannerMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        // Fetch the list of trending movies
        // I've corrected the endpoint name to `fetchTrending`
        const response = await axiosfile.get(requests.fetchTrending);
        
        // Select a random movie from the results
        const randomMovie = response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
        console.log(response.data.results)

        // Set the state to the single, randomly selected movie
        setBannerMovie(randomMovie);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching banner:', error);
        setLoading(false);
      }
    };
    
    fetchBannerMovie();
  }, []);
// Truncates a string and adds an ellipsis (...) if it is too long.
function truncate(str, n) {
 
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  // The loading state is checked here to ensure the banner isn't rendered until the data is fetched
  if (loading || !bannerMovie) {
    return <div>Loading the banner...</div>;
  }

  return (
    <header 
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path})`,
        backgroundPosition: "center center",
        
      }}
    >
      <div className="banner__contents">
        {/* Use `title` for the name if it's available, otherwise use `name` */}
        <h1>{bannerMovie.title || bannerMovie.name}</h1>
         

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        
        <p className="banner__description">
          {truncate(  bannerMovie?.overview,150)}
        </p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;   