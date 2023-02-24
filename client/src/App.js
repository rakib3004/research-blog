import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";

function App() {
  return (
   /* <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path=' /' element={<Home /> } />
        </Routes>
      </div>
    </Router>
     <div className="max-w-screen-md mx-auto pt-20">
    <Home/>
  </div>*/

  <Router>
<div className="max-w-screen-md mx-auto pt-20">
  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>
</div>
  </Router>
  
  );
}

export default App;
