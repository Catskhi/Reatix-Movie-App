import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './components/SideBar'
import SlideCorousel from './components/SlideCorousel/SlideCorousel'

function App() {

  return (
      <div>
        <SideBar/>
        <div id={'pageContent'} className='
            md:ml-52 
        '>
          <SlideCorousel/>
          
        </div>
      </div>
  )
}

export default App
