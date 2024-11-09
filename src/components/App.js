import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home';
import Signup from "./signup";
import Signin from "./signin";



function App(){
return  (
  <Router>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/signin' element={<Signin />}/>
    </Routes>
  </Router>
)
}
export default App