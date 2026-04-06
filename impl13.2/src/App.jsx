import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col bg-green-500 sm:flex-row-bg-blue-500 sm:flex-row'>
      <div className='bg-green-500 sm:bg-blue-500'>Child 1</div>
      <div className='bg-green-500 sm:bg-blue-500'>Child 2</div>
      <div className='bg-green-500 sm:bg-blue-500'>Child 3</div>
    </div>
  )
}

export default App
