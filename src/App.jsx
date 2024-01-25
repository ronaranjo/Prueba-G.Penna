import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/forms' element={<Productos/>}></Route>
            <Route path='/search' element={<Productos/>}></Route>
        </Routes>

        
    </div>

  )
}

export default App
