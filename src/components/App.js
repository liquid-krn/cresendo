import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home';
import Signup from "./signup";
import Signin from "./signin";
import Purchase from "./purchase";
import Barcode from "./barcode";


function App(){
return  (
  <Router>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/signin' element={<Signin />}/>
    <Route path='/purchase' element={<Purchase />}/>
    <Route path='/barcode' element={<Barcode />}/>
    </Routes>
  </Router>
)
}
export default App