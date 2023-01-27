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
      <div>
        <SideBar/>
        <div id={'pageContent'} className='
            md:ml-52 
        '>
          <SlideCorousel title='Recommended Movies 🍿' movies_file={'/data/recommended_movies.json'}/>
          <MovieListWithTitle extra_title_style_classes='mt-5 ml-5 lg:ml-8'
           title='Top Movies  ⭐️' movies_file_path='/data/top_movies.json'/>
          <MovieListWithTitle className='mt-[-20px]'   extra_title_style_classes='mt-5 ml-5 lg:ml-8'
            title='Action Movies 💥' movies_file_path='/data/action_movies.json'   />

        </div>
      </div>
  )
}

export default App
