import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import { Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Typography variant='h3'>Main Page</Typography> */}
        <Navbar/>
        <Routes>
          <Route path="/add" element={<Add/> } />
          <Route path="/view" element={<View/>} />
        </Routes>
      </div>
    
    </>
  )
}

export default App
