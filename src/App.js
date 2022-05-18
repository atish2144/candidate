// import logo from "./logo.svg";
// import "./App.css";

import Add from "./component/Add";
import List from "./component/List";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Add />} />
        <Route exact path="/list" element={<List />} />
      </Routes>

      {/* <Add></Add>
      <List></List> */}
    </div>
  );
}

export default App;
