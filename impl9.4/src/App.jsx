import { useState,useEffect } from 'react'

function App() {
  const [showTimer,setShowTimer] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setShowTimer(currentValue=>!currentValue);
    },5000)
  },[])

  return (
    <div>
      {showTimer && <Timer/>}
    </div>
  )
}

function Timer(){
  const [seconds, setSeconds] = useState(0);

  useEffect(()=>{
    let clock = setInterval(()=>{
      setSeconds(s=>s+1)
    },1000);

    //cleanup function
    return function(){
      clearInterval(clock)
    }


  },[])

  return (
    <div>
      {seconds} seconds elapsed
    </div>
  )
}

export default App
