import { useState } from 'react'
import Home from './pages/home'
import './index.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Home/>
    </>
  )
}

export default App
