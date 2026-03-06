import { useState, useRef } from 'react'

function App() {
  const [currentCount, setCurrentCount] = useState(0)
  const timer= useRef();
  
  function startClock(){
    let value= setInterval(function(){
      setCurrentCount(c=>c+1)
    },1000)
    timer.current=value
  }

  function stopClock(){
    console.log(timer)
    clearInterval(timer.current)
  }

  return (
    <>
      {currentCount}
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </>
  )
}

export default App
