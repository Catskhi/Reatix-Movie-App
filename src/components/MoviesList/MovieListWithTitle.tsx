import React from 'react';
import SlideCorousel from '../SlideCorousel/SlideCorousel';
import Title from '../Title';
import MoviesList from './MoviesList';

export interface MovieListWithTitleProps {
    title : string,
    movies_file_path : string,
    className ?: string,
    extra_title_style_classes ?: string
}

export default function MovieListWithTitle ({title, movies_file_path,
                        extra_title_style_classes, className
                    }: MovieListWithTitleProps) {
  return (
    <div className={className}>
        <Title className={extra_title_style_classes} text={title}/>
        <MoviesList style_classes='hidden lg:flex' movies_file_path={movies_file_path}/>
        <SlideCorousel style_classes='block lg:hidden' movies_file={movies_file_path}/>
    </div>
  );
}
