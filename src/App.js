import React from 'react';
import './App.css';
import { Landing } from './pages/Landing/Landing';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';

function App() {
  return (
      <Router>
        {/* <Navbar>
          {}
        </Navbar> */}
        <Routes>
          <Route path='/Aqua_React' element={<Navigate to={"/login"}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    );
}

export default App;