import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import { Mapdemo2 } from './components/Mapdemo2'
import { Mapdemo1 } from './components/Mapdemo1'
import { Mapdemo3 } from './components/Mapdemo3'
// import './App.css'

function App() {

  
  return (
  <div>
    <Header></Header>
    {/* <Mapdemo1></Mapdemo1> */}
    {/* <Mapdemo2></Mapdemo2> */}
    {/* <Content></Content> */}
    <Mapdemo3></Mapdemo3>
  <Footer></Footer>

  </div>
  )
}
export default App
