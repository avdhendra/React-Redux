import React from "react";

import "./App.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Store from "./Store";
import Checkout from "./Checkout";



function App() {
  return (
    <div className="app">
      <Router>
      
        <Routes>
          <Route exact path='/' element={<Store/>}></Route>
          <Route exact path='/checkout' element={<Checkout/>}></Route>
     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
