// import logo from "./logo.svg";
// import "./App.css";

import Add from "./component/Add";
import List from "./component/List";
import Add1 from "./component/Add1";
import Edit from "./component/Edit"

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Add1 />} />
        <Route exact path="/list" element={<List />} />
        <Route exact path="/Edit/:id" element={<Edit />} />
      </Routes>

      {/* <Add></Add>*/}
      {/* <List></List>
      <Add1></Add1> */}
    </div>
  );
}

export default App;
