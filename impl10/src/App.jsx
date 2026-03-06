import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
      <Link to="/">Homepage </Link>
      |
      <Link to="/java">JAVA </Link> 
      |
      <Link to="/cpp">CPP </Link> 
      </div>
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
  const navigate = useNavigate();
  function redirectUser(){
    navigate("/")
  }
  return(
    <>
    Welcome to the CPP Course
    <button onClick={redirectUser}>Go to landing page</button>
    </>
  )
}

export default App
