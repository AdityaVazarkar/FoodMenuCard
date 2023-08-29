import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Contact from "./component/Contact";

import "./App.css";
// import Card from "./component/Card";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// import React from "react";
// import ReactDOM from "react-dom";
// const App = (props) => {
// var name = "Learner";
 
// var element = <h1>Hello, {name}.Welcome to GeeksforGeeks.</h1>;
 
// ReactDOM.render(element ,  document.getElementById("root"));
// }
