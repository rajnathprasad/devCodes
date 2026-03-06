import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/java" element={<Java />} />
            <Route path="/cpp" element={<Cpp />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <header style={{textAlign : "center"}}>
        <Link to="/">Homepage </Link>|<Link to="/java">JAVA </Link>|
        <Link to="/cpp">CPP </Link>
      </header>
      <div style={{height : "80vh", display : "flex", justifyContent: "center", alignItems : "center"}}>
      <Outlet />
      </div>
      <footer style={{textAlign : "center"}}>FOOTER</footer>
      
    </div>
  );
}

function Landing() {
  return <div>Welcome to the Landing Page</div>;
}
function Java() {
  return <div>Welcome to the Java Course</div>;
}
function Cpp() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return (
    <div>
      Welcome to the CPP Course
      <div>
      <button onClick={redirectUser}>Go to landing page</button>
      </div>
    </div>
  );
}
function ErrorPage() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return (
    <div>
      Sorry, Page not found
      <div>
      <button onClick={redirectUser}>Go to landing page</button>
      </div>
    </div>
  );
}

export default App;
