import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/cpp" element={<Cpp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

function Landing(){
  return(
    <>
    Welcome to the Landing Page
    </>
  )
}
function Java(){
  return(
    <>
    Welcome to the Java Course
    </>
  )
}
function Cpp(){
  return(
    <>
    Welcome to the CPP Course
    </>
  )
}

export default App
