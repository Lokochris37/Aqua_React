import React from 'react';
import './App.css';
import { Landing } from './pages/Landing/Landing';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { UserPanelWithAuth } from './pages/UserPanel/UserPanel';

function App() {
  return (
      <Router>
        {/* <Navbar>
          {}
        </Navbar> */}
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/panel' element={<UserPanelWithAuth/>}/>
        </Routes>
      </Router>
    );
}

export default App;
