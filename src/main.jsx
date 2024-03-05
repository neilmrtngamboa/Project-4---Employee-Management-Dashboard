import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import EmployeeList from "./pages/EmployeeList";
import EmployeeCard from "./pages/EmployeeCard";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
