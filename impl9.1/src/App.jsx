import { useState } from 'react'

function App() {
  return (<div style={{background : "teal", height: "100vh"}}>
    <ToggleMessage/>
    <ToggleMessage/>
    <ToggleMessage/>
  </div>
  )
}
function ToggleMessage(){
  let [notificationCount,setNotificationCount]=useState(0);
  console.log("re-render");
  function increment(){
    setNotificationCount(notificationCount+1);
  }
  return <div>
    <button onClick={increment}>
      Increase Count
    </button>
    {notificationCount}
  </div>

}

export default App
