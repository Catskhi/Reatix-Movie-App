import React, { useEffect, useState } from 'react';
import MovieProps from '../interfaces/MovieProps';
import Fade from './Fade';

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
        <div className='h-[200px] w-56 
            md:ml-4
            rounded-lg lg:ml-4 mt-2
            lg:w-[100%] lg:h-[330px] lg:mt-4
            transition-all duration:300
            pointer-events-none
        '>
            <div className=' 
                z-20
                absolute rounded-lg
                w-28 m-4 ml-6
                lg:w-48 lg:m-6
                transition-all duration:300
                '>  
                    <img className='
                        hidden
                        lg:block
                        w-28
                        lg:w-48
                        rounded-[18px]
                    '
                    src={movie.movie_poster}
                    >
                    </img>
            </div>
            <Fade/>
            <div className='absolute
               
                rounded-lg mt-2  text-center
                w-full 
                md:w-full
                md:ml-0
                lg:w-auto
                lg:mt-8
                lg:ml-[50%]
                xl:ml-[35%]
                lg:text-left
                '>
                <h1 className='mt-4 lg:mt-5
                    text-lg lg:text-2xl font-bold
                
                '>{movie.movie_name}</h1>
                <p className='
                    mt-2
                    text-sm 
                    lg:text-base
                '>
                    {movie.movie_year} | {movie.movie_rating} | {movie.movie_duration}
                </p>
                <p className='
                    hidden
                    mt-2
                    text-sm
                    
                    lg:block
                '>
                    {movie.movie_description}
                </p>
                <div className='
                    absolute
                    
                    w-full h-full
                    flex justify-center
                '>
                    <a
                    target={'_blank'}
                    href={movie.movie_trailer}
                    className='absolute bg-opacity-70 pointer-events-auto  
                            font-bold
                            bg-gray-600
                            hover:bg-opacity-70
                            hover:bg-gray-700
                            cursor-pointer
                            mt-5 p-3 px-8
                            lg:m-7
                            lg:px-16
                            rounded-[13px]
                            transition-all duration:300
                            '>
                        <p>Trailer</p>
                    </a>
                </div>
            </div>
            
            <img className='pointer-events-none 
            sm:absolute z-[-10]
            rounded-lg
            object-cover object-top 
            w-full
            h-[200px]
            absolute
            sm:w-full sm:h-[200px]
            lg:static
            lg:w-[1000px] lg:h-[330px]
            transition-all duration:500
            ' src={movie.movie_poster}></img>
        </div>
  );
}
