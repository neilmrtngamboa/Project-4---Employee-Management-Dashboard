import { Outlet, Link } from "react-router-dom";
import React from "react";
import './Style/Layout.css'
import FirebaseInitialization from './FirebaseConfig'
import {getAuth, onAuthStateChanged} from "firebase/auth";



function Layout () {


    return (
         <main className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg" id="navBar">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-2" to='/'>EMD</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to='employeelist'>Employee List</Link>
                            <Link className="nav-link" to='employeecard'>Employee Card</Link>
                            <Link className="nav-link" to='addemployee'>Manage Records</Link>
                            <Link className="nav-link ms-auto" to='login'>Login</Link>
                            <Link className="nav-link ms-auto" to='register'>Register</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid p-4">
                <Outlet />
            </div>

            <footer className="text-center text-black p-3 mt-auto" id="ftr">
                    <h5 className="fw-bold">Employee Management Dashboard</h5>
                    <small className="fw-light">A project by Neil Martin Gamboa</small>
                    <div><small className="fw-light">BASE404™</small></div>
                    

            </footer>
        </main>
        
    )
}

export default Layout;