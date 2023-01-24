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
        <div className='h-[200px] w-[60vw] m-1  rounded-lg
            md:w-[100%] md:h-[330px] md:mt-4
            transition-all duration:300
            pointer-events-none
        '>
            <div className=' 
                z-10
                absolute rounded-lg
                w-28 m-4 ml-6
                md:w-48 md:m-6
                transition-all duration:300
                '>
                    <img className='
                        hidden
                        md:block
                        w-28
                        md:w-48
                        rounded-[18px]
                    '
                    src={movie.movie_poster}
                    >
                    </img>
            </div>
            <div className='
                absolute font-bold text-lg
                z-10 w-full h-full mt-4
                text-center
            '>
                <h2 className='
                    
                '>{movie.movie_name}</h2>
            </div>
            <div 
            className='
                    absolute
                     bg-slate-900
                    opacity-20
                    h-full w-full
                '
            />
            <img className='pointer-events-none 
            rounded-lg
            object-cover object-top w-[100%] h-[100%]
            transition-all duration:500
            ' src={movie.movie_poster}></img>
        </div>
  );
}
