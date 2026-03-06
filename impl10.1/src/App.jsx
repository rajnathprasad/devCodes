import { useState, useRef } from 'react'

function App() {
  const usernameRef = useRef()
  function focusOnInput(){
    usernameRef.current.focus();
  }
  return (
    <>
      Sign UP
      <input type="text" id="username" ref={usernameRef} placeholder='Username'/>
      <input type="password" id="password" placeholder='Password'/>
      <input type="button" id="submitButton" value="Sign Up" onClick={focusOnInput}/>
    </>
  )
}

export default App
