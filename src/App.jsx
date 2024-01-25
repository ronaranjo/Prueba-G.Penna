import { useState } from 'react'
import Home from './views/home/home'
import Forms from './views/forms/forms'
import NavBar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='App'>
        <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/forms' element={<Forms/>}></Route>
           
        </Routes>
 
    </div>

  )
}

export default App
