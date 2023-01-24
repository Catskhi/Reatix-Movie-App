import React, { useState, useRef, useEffect } from 'react';
import CorouselItem from './CorouselItem';

import {motion} from 'framer-motion'

import MovieProps from '../interfaces/MovieProps';

export interface SlideCorouselProps {
}

export default function SlideCorousel (props: SlideCorouselProps) {
  const [moviesData, setMoviesData] = useState<MovieProps[] | undefined>()
  const [movieInfo, setMovieInfo] = useState<Object | undefined>()

  const carousel  = useRef<HTMLDivElement>(null)
  const [carouselWidth, setCarouselWidth] = useState(0)

  useEffect(() => {
      setCarouselWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
      getJSON('/data/movies.json')
  } ,[])

  async function getJSON(path : string) {
      const response = await fetch(path)
      const file = await response.json()
      setMoviesData(file)
  }


  useEffect(() => {
      if (moviesData) {
          moviesData.map((movie) => {
              console.log(movie.movie_name)
          })
      }
  }, [moviesData])

  return (
    <div>
        <h1 className='text-lg font-bold
            ml-5 mt-5
            md:ml-8 md:mt-6
        '>Recommended Movies 🍿</h1>
        <div 
        ref={carousel}
        className='
          ml-4 mt-2 overflow-hidden max-w-[95vw]
          md:max-w-[83vw]
          transition-all duration-300
        '>
          <motion.div className='flex'
            drag='x'
            dragConstraints={{ right: 0, left: -carouselWidth}}
            initial={{x : 100}}
            animate={{x : 0}}
            transition={{duration : 0.8}}
          >
              {moviesData && moviesData.map((movie) => {
                return (
                    <CorouselItem movie={movie} />
                )
          })}
          </motion.div>
        </div>

    </div>
  );
}
