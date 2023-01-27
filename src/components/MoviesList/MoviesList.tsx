import React, { useState } from 'react';
import getJSON from '../functions/Fetcher';
import MovieProps from '../interfaces/MovieProps';
import MovieItem from './MovieItem';

export interface MoviesListProps {
  style_classes ?: string,
  movies_file_path : string
}

export default function MoviesList ({style_classes, movies_file_path}: MoviesListProps) {
    const [topMovies, setTopMovies] = useState<MovieProps[] | undefined>()

    const getTopMovies = (async () => {
        const topMoviesResponse = await getJSON(movies_file_path)
        setTopMovies(topMoviesResponse)
    })

    getTopMovies()

  return (
    <div className={'w-auto ml-7 mr-6 ' + style_classes}>
        {topMovies && topMovies.map((movie) => {
            return (
                <MovieItem movie_trailer={movie.movie_trailer} movie_poster={movie.movie_poster}/>
            )
        })}
    </div>
  );
}
