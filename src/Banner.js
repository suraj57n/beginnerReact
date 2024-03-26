import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from './axios'; // Corrected import path
import { urls } from "./requests"; // Corrected import name
import "./Banner.css";
const base = "http://www.omdbapi.com/?s=";

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(urls.action);
                const randomIndex = Math.floor(Math.random() * response.data.Search.length) - 1;
                const randomMovie = response.data.Search[randomIndex];
                setMovie(randomMovie);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    
 
    
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${movie ? movie.Poster : ''})`, // corrected background image
                backgroundPosition: "center center"
            }}>
            {/* Your JSX goes here */}
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.Title}
                </h1>
                <div className="banner_buttons">
                   <button className="banner_button">Play</button>
                   <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                  lorem ipsum dolor sit amet, consectetur lorem temp lorem ipsum dolor sit am lorem ipsum dolor sit
                </h1>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    );
}

export default Banner;
