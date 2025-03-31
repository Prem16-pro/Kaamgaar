import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainPage from "./comps/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <MainPage/>
      </Router>
    </>
  );
}

export default App;
