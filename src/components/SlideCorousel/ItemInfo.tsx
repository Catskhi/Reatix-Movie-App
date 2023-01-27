import React from 'react';

export interface ItemInfoProps {
    movie_name : string,
    movie_year : string,
    movie_rating : string,
    movie_duration : string,
    movie_description: string,
    movie_trailer : string
}

export default function ItemInfo ({movie_name, movie_year, movie_rating,
                                    movie_duration, movie_description, movie_trailer}: ItemInfoProps) {
  return (
    <div className='absolute
               
                rounded-lg mt-2  text-center
                w-full 
                md:w-[100%]
                lg:w-[50%]
                lg:mt-8
                lg:ml-[45%]
                xl:ml-[35%]
                lg:text-left
                '>
                <h1 className='mt-4 lg:mt-5
                    text-md md:text-lg lg:text-2xl font-bold
                
                '>{movie_name}</h1>
                <p className='
                    mt-2
                    text-sm 
                    lg:text-base
                '>
                    {movie_year} | {movie_rating} | {movie_duration}
                </p>
                <p className='
                    hidden
                    mt-2
                    text-sm
                    
                    lg:block
                '>
                    {movie_description}
                </p>
                <div className='
                    absolute
                    
                    w-full h-full
                    flex justify-center
                '>
                    <a
                    target={'_blank'}
                    href={movie_trailer}
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
  );
}
