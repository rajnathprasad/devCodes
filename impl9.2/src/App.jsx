import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  

  const [count, setCount] = useState(0)
  function increaseCount(){
    setCount(c=>c+1)
  }
  useEffect(function(){
    setInterval(increaseCount,1000)
  },[])

  return (<div>
    {count>0 && <div style={{background : "red", width : 25, height : 25, textAlign:"center", borderRadius : "50%", color : "white", position : "absolute", marginLeft : "50px", marginTop : "10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
      {(count>9)?"9+":count}
    </div>}
    <img src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-grise.png" alt="" style={{width:80, cursor :"pointer"}} />
    {/* <button onClick={increaseCount}>Send Notification</button> */}
  </div>)
}

export default App
