import "./app.css";
import Nav from "../nav/Nav";
import Content1 from "../content1/Content1";
import Content2 from "../content2/Content2";
import Content3 from "../content3/Content3";
import Content4 from "../content4/Content4";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Content1 />} onClick={(e)=>e.preventDefault()} />
          <Route path="/pictures" element={<Content2 />} onClick={(e)=>e.preventDefault()} />
          <Route path="/about-us" element={<Content3 />} />
          <Route path="/contacts" element={<Content4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
