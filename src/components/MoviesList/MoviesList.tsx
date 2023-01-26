import React from 'react';

export interface MoviesListProps {
    movie_poster : string
}

export default function MoviesList ({movie_poster}: MoviesListProps) {
  return (
    <div>
        <img src={movie_poster}></img>
    </div>
  );
}
