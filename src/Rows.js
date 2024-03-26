import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Row.css'
import axios from './axios';
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
const API_KEY = "cf016d8d";
const link="https://www.omdbapi.com/?s=2002&apikey=cf016d8d";
function Rows({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
            console.log("nhi chalru me");
        } else {
            console.log("Haan bhai, main chal raha hoon"); 
            movieTrailer(null ,movie.Title )
                .then((url) => {
                    console.log("url is " + url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log("urlParamsn" + urlParams);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${fetchUrl}`);
            setMovies(request.data.Search);         
        }
        fetchData(); 
    }, [fetchUrl]);
    const opts={
        height:"390",
        width:"100%",
        playVars:{
            autoplay:1,
        }
    }
    return (
        <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(movie => (

                <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.imdbID} 
                 src={isLargeRow?movie.Poster:movie.Poster} alt={movie.Title} 
               onClick={()=>handleClick(movie)}
                 />
                
            ))} 
            
          
        </div>
        {trailerUrl && <Youtube
        videoId={trailerUrl} opts={opts}
        />}
    </div>
    );
}

// Rows.propTypes = {
//     title: PropTypes.string.isRequired,
//     fetchUrl: PropTypes.string.isRequired
// };
// async function Rows()
// {
//     var data=await fetch(link);
//     data=data.json();
//     console.log(data.Search);
// }
export default Rows;
