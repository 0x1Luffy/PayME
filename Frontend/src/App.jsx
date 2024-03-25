import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from './pages/Home';
import { baseURL } from "../URLs";

function App() {
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token && window.location.pathname !== '/dashboard') {

      window.location.href = '/dashboard';
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        {isAuthenticated ? (
          <>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/send' element={<SendMoney />} />
            <Route path='*' element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path='/dashboard' element={<Navigate to="/signin" />} />
            <Route path='/send' element={<Navigate to="/signin" />} />
            
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
