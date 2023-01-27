import React, { useState } from 'react';
import getJSON from '../functions/Fetcher';
import MovieProps from '../interfaces/MovieProps';
import MovieItem from '../MoviesList/MovieItem';

export interface TopMoviesProps {
  style_classes ?: string
}

export default function TopMovies ({style_classes}: TopMoviesProps) {
    const [topMovies, setTopMovies] = useState<MovieProps[] | undefined>()

    const getTopMovies = (async () => {
        const topMoviesResponse = await getJSON('/data/top_movies.json')
        setTopMovies(topMoviesResponse)
    })

    getTopMovies()

  return (
    <div className={'w-auto mb-2 ml-7 mr-6 h-[400px] ' + style_classes}>
        {topMovies && topMovies.map((movie) => {
            return (
                <MovieItem movie_trailer={movie.movie_trailer} movie_poster={movie.movie_poster}/>
            )
        })}
    </div>
  );
}
