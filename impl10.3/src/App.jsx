import { useContext } from 'react'
import { useState, createContext} from 'react'

const bulbContext = createContext()

function App() {
  const [bulbOn, setBulbOn] = useState(true)
  return (
    <>
    <bulbContext.Provider value={{
      bulbOn : bulbOn,
      setBulbOn : setBulbOn
    }}>
      <Light/>
    </bulbContext.Provider>
    </>
  )
}

function Light(){
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  )
}

function LightBulb(){
  const {bulbOn} = useContext(bulbContext)
  return (
    <div>
      {bulbOn?"Bulb is on":"Bulb is off"}
    </div>
  )
}

function LightSwitch(){
  const {bulbOn, setBulbOn} = useContext(bulbContext)
  function toggle(){
    setBulbOn(!bulbOn)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  )
}

export default App
