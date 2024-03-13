import { Link } from "react-router-dom";
import { useState } from "react";
import FirebaseInitialization from '../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Register () {
    return (
        <>
        <h1>Register Page</h1>
        </>
    )
}
export default Register;