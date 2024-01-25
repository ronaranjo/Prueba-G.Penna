import { useState } from 'react'
import Home from './views/home/home'
import NavBar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/forms' element={<Productos/>}></Route>
            <Route path='/search' element={<Productos/>}></Route> */}
        </Routes>

        
    </div>

  )
}

export default App
