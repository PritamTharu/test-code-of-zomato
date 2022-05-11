import React from 'react';
import './App.css';
import Topbar from "./component/topbar/topbar"
import Homescreen from "./screen/Homescreen"
import CartScreen from './screen/cartScreen';
import LoginScreen from './screen/Loginscreen'
import RegisterScreen from './screen/Registerscreen'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <>

      <Topbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homescreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route exact path="/login" element={<LoginScreen/>}></Route>
          <Route exact path="/register" element={<RegisterScreen/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
