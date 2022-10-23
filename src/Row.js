import React, { useState, useEffect } from 'react';
import axio from './axios';

function Row({title, fetchUrl})  {
    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {
        async function fetchData() {
            const request = await axio.get(fetchUrl);
           setMovies(request.data.results);

           return request;
      
        }
        fetchData();
  
    }, [fetchUrl]);



   console.log(movies);



    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                
                {movies.map(movie=>(
                    <img src={movie.poster_path} alt="movie.name"/>
                ))}
                </div>

        </div>
    )
  }

export default Row