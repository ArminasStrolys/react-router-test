import "./app.css";
import Nav from "../nav/Nav";
import Content1 from "../_1content/Content1";
import Content4 from "../_4content/Content4";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Content1 /> */}
        <Routes>
          {/* <Route path="/">
            <Content1 />
          </Route>
          <Route path="/contacts">
            <Content4 />
          </Route> */}
          <Route path="/" element={<Content1 />} />
          <Route path="/contacts" element={<Content4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
