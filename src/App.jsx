import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-3xl font-bold text-green-950">
        Building Netflix-GPT!
      </p>
    </>
  )
}

export default App
