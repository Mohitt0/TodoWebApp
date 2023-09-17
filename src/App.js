import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/addtodo" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
