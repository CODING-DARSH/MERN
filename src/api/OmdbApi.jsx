import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import '../assets/CSS/movies.css'
import { Link } from 'react-router-dom';

export const OmdbApi = () => {
      const [moveis, setmoveis] = useState([]);
  const [query, setquery] = useState("");
    const searchMovie = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=dd6175ad&s=${query}`
    );
    console.log(res.data.Search); 
    setmoveis(res.data.Search);
  };
   return (
  <div className="omdb-wrapper">
    <h1 className="heading">OMDB Movie Search</h1>

    <div className="search-box">
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={(event) => setquery(event.target.value)}
      />
      <button onClick={searchMovie}>Search</button>
    </div>

    <div className="container py-4">
      <div className="row g-3">
        {moveis?.map((movie) => (
          <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4">
            <div className="card movie-card h-100 shadow-sm">
                 <Link to={`/moviedetail/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                className="card-img-top movie-image"
                alt={movie.Title}
              />
              </Link>
              <div className="card-body d-flex flex-column">
                <h5 className="movie-title">{movie.Title}</h5>

                <div className="mt-auto d-flex justify-content-between movie-meta">
                  <span>
                    ID: <strong>{movie.imdbID}</strong>
                  </span>
                  <span>
                    Year: <strong>{movie.Year}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}