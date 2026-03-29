import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [content, setContent] = useState("");
  return (
    <>
      Currenet count : {count}
      <button onClick={()=>setCount(c=>c+1)}>Increase</button>
      <input type="text" placeholder='Type Something...' value={content} onChange={(e)=>setContent(e.target.value)} />
      {content}
    </>
  )
}

export default App
