import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './components/SideBar'
import SlideCorousel from './components/SlideCorousel/SlideCorousel'
import Title from './components/Title'
import MoviesList from './components/MoviesList/MoviesList'
import MovieListWithTitle from './components/MoviesList/MovieListWithTitle'

function App() {

  return (
      <div className='mb-28 md:mb-4'>
        <SideBar/>
        <div id={'pageContent'} className='
            md:ml-52 
        '>
          <SlideCorousel title='Recommended Movies 🍿' movies_file={'/data/recommended_movies.json'}/>
          <MovieListWithTitle extra_title_style_classes='mt-5 lg:mt-6'
           title='Top Movies  ⭐️' movies_file_path='/data/top_movies.json'/>
          <MovieListWithTitle className='mt-[-20px]'   extra_title_style_classes='mt-10 lg:mt-7 '
            title='Action Movies 💥' movies_file_path='/data/action_movies.json'   />
          <MovieListWithTitle className='mt-[-20px]'   extra_title_style_classes='mt-10 lg:mt-7 '
            title='Drama Movies 🎭' movies_file_path='/data/drama_movies.json'   />

        </div>
      </div>
  )
}

export default App
