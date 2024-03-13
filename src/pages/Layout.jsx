import { Outlet, Link } from "react-router-dom";
import React from "react";
import './Style/Layout.css'
import FirebaseInitialization from './FirebaseConfig'
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { useState,useEffect } from "react";


function Layout () {

    const [authenticated,setAuthenticated] = useState(false)
    const [userProfile, setUserProfile] = useState({})

    useEffect( () => {

        const auth = getAuth(FirebaseInitialization);
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthenticated(true);
            setUserProfile(user)
            const uid = user.uid;
            
            // ...
        } else {
            // User is signed out
            // ...
            
        }
        });

    }, [])

    const logOut = () => {

        const auth = getAuth(FirebaseInitialization);
        signOut(auth).then(() => {
            alert('Signed out successfully!')
            setAuthenticated(false)

        }).catch((error) => {
            alert('Error! failed log out attempt!');
        })
    }

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
                        </div>

                        <div className="navbar-nav">
                            {
                                authenticated
                                ?
                                <Link className="nav-link" to='addemployee'>Manage Records</Link>
                                :
                                <></>
                            }
                        </div>
                        <p className="my-auto mx-auto"> Hi, {userProfile.displayName}</p>
                        <div className="navbar-nav ms-auto">
                        {
                                authenticated
                                ?
                                <li className="nav-item">
                                <Link className="nav-link text-white" onClick={() => logOut()}>Logout</Link>
                                </li>
                                
                                :
                                <>
                                <li className="nav-item">
                                <Link className="nav-link text-white" to="login" >Login</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link text-white" to="register" >Register</Link>
                                </li>
                                </>
                            }
                        </div>

                    </div>
                </div>
            </nav>

            <div className="container-fluid p-4">
                <Outlet auth={authenticated} />
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