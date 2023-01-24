import React, { useState, useRef, useEffect } from 'react';
import CorouselItem from './CorouselItem';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import MovieProps from '../interfaces/MovieProps';

export interface SlideCorouselProps {
}

export default function SlideCorousel (props: SlideCorouselProps) {
  const [moviesData, setMoviesData] = useState<MovieProps[] | undefined>()
  const [movieInfo, setMovieInfo] = useState<Object | undefined>()

  useEffect(() => {
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
        <Swiper className='ml-4 mr-4 select-none
          md:ml-7
          transition-all duration-300
          '
          spaceBetween={30}
          slidesPerView={1.5}
          pagination={{ clickable: true }}
        >
                    {moviesData && moviesData.map((movie) => {
                      return (
                        <SwiperSlide className='cursor-grab' key={movie.movie_name}>
                          <CorouselItem movie={movie} />
                        </SwiperSlide>
                      )
                })}
        </Swiper>

    </div>
  );
}
