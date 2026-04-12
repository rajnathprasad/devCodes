import { useState } from "react"
import College from "./components/College"
import { subjectContext } from "./contextData"
export default function App(){
  const [subject,setSubject] = useState("English")
  return (
    <div style = {{backgroundColor : "yellow", padding : 10}}>
    <subjectContext.Provider value={subject}>
      <select value={subject} name="" id="" onChange={(event)=>setSubject(event.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="History">History</option>
        <option value="English">English</option>
      </select>
    <h1 style={{color : "red"}}>Context API</h1>
    <button onClick={()=>setSubject("")}>Clear Subject</button>
    <College></College>
    </subjectContext.Provider>
    </div>
  )
}