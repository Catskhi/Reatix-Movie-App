import React from 'react';

export interface MovieItemProps {
    movie_poster : string,
    movie_trailer : string
}

export default function MovieItem ({movie_poster, movie_trailer}: MovieItemProps) {
  return (
    <div className='w-full h-[400px]'>
        <div
        className='relative bg-cover bg-center w-[90%] h-[90%] rounded-[15px]'
        style={{backgroundImage: `url(${movie_poster})`}} >
            <a target='_blank' href={movie_trailer} className='h-full w-full flex justify-center items-center group'>
                <div className='group-hover:bg-slate-800 absolute
                    h-full w-full none z-10 rounded-[15px] opacity-80 cursor-pointer
                    transition-all duration-300
                '>
                </div>
                <h2 className='scale-0 group-hover:scale-100 absolute z-20
                    transition-all duration-300 text-center font-bold 
                '>Watch Trailer</h2>
            </a>

        </div>
    </div>
  );
}
