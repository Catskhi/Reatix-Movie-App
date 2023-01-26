import React, { useState, useRef, useEffect } from 'react';
import CorouselItem from './CorouselItem';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import MovieProps from '../interfaces/MovieProps';
import Title from '../Title';
import getJSON from '../functions/Fetcher';

export interface SlideCorouselProps {
    movies_file : string,
    style_classes ?: string,
    title ?: string
}

export default function SlideCorousel ({movies_file, style_classes, title}: SlideCorouselProps) {
  const [moviesData, setMoviesData] = useState<MovieProps[] | undefined>()
  const [movieInfo, setMovieInfo] = useState<Object | undefined>()

  useEffect(() => {
    getMoviesData()
  } ,[])

  async function getMoviesData() {
     const movies_data = await getJSON(movies_file)
     setMoviesData(movies_data)
  }

  return (
    <div className={style_classes}>
        {title && <Title className={'ml-5 mt-5 md:ml-8 md:mt-6'} text={title}/>}
        <Swiper className='ml-4 mr-4 select-none
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
