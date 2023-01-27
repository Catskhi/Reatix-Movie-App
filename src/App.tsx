import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './components/SideBar'
import SlideCorousel from './components/SlideCorousel/SlideCorousel'
import Title from './components/Title'
import TopMovies from './components/TopMovies/TopMovies'

function App() {

  return (
      <div>
        <SideBar/>
        <div id={'pageContent'} className='
            md:ml-52 
        '>
          <SlideCorousel title='Recommended Movies 🍿' movies_file={'/data/recommended_movies.json'}/>
          <Title className='mt-5 ml-7 mb-2' text='Top Movies  ⭐️'/>
          <TopMovies style_classes='hidden lg:flex'/>
          <SlideCorousel style_classes='block lg:hidden' movies_file='/data/top_movies.json'/>
        </div>
      </div>
  )
}

export default App
