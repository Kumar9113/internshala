import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ShowList.css'

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div  className="container">
      <div className="head">
          <h1>TV Shows</h1>
      </div>
      <div className="grid">
      
      <ul className="elements">
        {shows.map((show) => (
          <div className="content">
              <li key={show.show.id}>
            <div className="main">
              <h2>{show.show.name}</h2>
              <p>Type: {show.show.type}</p>
              <p>Language: {show.show.language}</p>
              <p>Genres: {show.show.genres}</p>
            </div>
            <div className="mainsub">
              <p>Status:{show.show.status}</p>
              <p>Runtime:{show.show.runtime}</p>
            </div>
            <div className="submit">
              <button>  <Link to={`/shows/${show.show.id}`}><h3>Show more</h3></Link></button>
            </div>

          </li>
       
          </div>
        ))}
      </ul>

      </div>
     
    </div>
  );
}

export default ShowList;
{/* <button>  <Link to={`/shows/${show.show.id}`}>Show more</Link></button> */}
