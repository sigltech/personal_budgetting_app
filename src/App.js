import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage, Dashboard,LoginPage, RegisterPage } from './pages';
import {DashboardLayout, MainLayout} from './Layout';
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<MainLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route path="/Dashboard" element={<DashboardLayout />} >
              <Route element={<Dashboard />} path="/Dashboard" exact />
            </Route>
          </Routes>
    </>  
  );
}

export default App;
