import React, { useEffect, useState } from 'react';
import MovieProps from '../interfaces/MovieProps';

interface ItemProps {
    movie : MovieProps,
}

export default function CorouselItem ({movie} : ItemProps) {

    // async function getMovie() : Promise<void> {
    //     const url = 'https://imdb-api.com/en/API/SearchMovie/' + import.meta.env.VITE_API_KEY + 
    //     '/' + movieName + ' ' + (movieYear.toString())
    //     await fetch(url)
    //     .then(response => response.json())
    //     .then(data => setMovieInfo(data))
    // }

    // useEffect(() => {
    //     getMovie()
    // }, [])

  return (
        <div className='min-h-[220px] min-w-[320px] m-1 rounded-lg
            max-h-[220px] max-w-[320px]
            transition-all duration:300
        '>
            <img className='pointer-events-none rounded-lg

            ' src={movie.movie_poster}></img>
        </div>
  );
}
