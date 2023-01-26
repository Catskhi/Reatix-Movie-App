import React, { useEffect, useState } from 'react';
import MovieProps from '../interfaces/MovieProps';
import Fade from './Fade';
import ItemInfo from './ItemInfo';

interface ItemProps {
    movie : MovieProps,
}

export default function CorouselItem ({movie} : ItemProps) {

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
            <ItemInfo movie_name={movie.movie_name}
            movie_year={movie.movie_year} movie_rating={movie.movie_rating}
            movie_duration={movie.movie_duration} movie_description={movie.movie_description}
            movie_trailer={movie.movie_trailer}/>
            
            <img className='pointer-events-none 
            z-[-10]
            rounded-lg
            object-cover object-top 
            w-full
            h-[200px]
            absolute
            lg:static
            lg:w-full lg:h-[330px]
            transition-all duration:500
            ' src={movie.movie_poster}></img>
        </div>
  );
}
