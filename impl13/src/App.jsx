import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button } from './components/buttons'
import { Input } from './components/input'
import { Otp } from './components/otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen bg-blue-700'>
        <Otp></Otp>
      </div>
    </>
  )
}

export default App
