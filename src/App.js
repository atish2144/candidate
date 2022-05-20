// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Add from "./component/Add";
import List from "./component/List";
import Add1 from "./component/Add1";
import Edit from "./component/Edit"
import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import { Routes, Route } from "react-router-dom";
function App() {
  const NumberContext = React.createContext()
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
      {/* <NumberContext.Provider value={42}>
        <Component1 />
        <Component2 />
      </NumberContext.Provider> */}
    </div>
  );
}

export default App;
