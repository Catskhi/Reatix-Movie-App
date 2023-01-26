import React from 'react';

export interface MovieItemProps {
    movie_poster : string
}

export default function MovieItem ({movie_poster}: MovieItemProps) {
  return (
    <div className='w-full h-[80%] m-2'>
        <img 
        className='object-cover w-full h-full rounded-[15px]'
        src={movie_poster} />
    </div>
  );
}
