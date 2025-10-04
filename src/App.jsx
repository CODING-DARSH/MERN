import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import { Mapdemo2 } from './components/Mapdemo2'
import { Mapdemo1 } from './components/Mapdemo1'
import { Mapdemo3 } from './components/Mapdemo3'
import { Mapdemo4 } from './components/Mapdemo4'
import { Mapdemo5 } from './components/Mapdemo5'
import { Statedemo1 } from './components/Statedemo1'
import { Statedemo2 } from './components/Statedemo2'
import { Statedemo3 } from './components/Statedemo3'
import { Inputdemo1 } from './components/Inputdemo1'
import { Inputdemo2 } from './components/Inputdemo2'
import { Inputdemo3 } from './components/Inputdemo3'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './Netflix/NetflixHome'
import { NetflixMovies } from './Netflix/NetflixMovies'
import { NetflixShow } from './Netflix/NetflixShow'
import { Error404 } from './components/Error404'

// import './App.css'

function App() {

  
  return (
  <div>
<Navbar></Navbar>
  <Routes>
    <Route path='/netflixhome' element={<NetflixHome/>}></Route>
    <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
    <Route path='/netflixshow' element={<NetflixShow/>}></Route>
    <Route path='/*' element={<Error404/>}></Route>
  </Routes>
  </div>
  )
}
export default App
