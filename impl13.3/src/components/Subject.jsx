import { useContext } from "react"
import { subjectContext } from "../contextData"

export default function Subject(){
    const subject = useContext(subjectContext)
    return (
        <div style={{backgroundColor:"red", padding : 10}}>
            <h1>Subject is {subject}</h1>
        </div>
    )
}