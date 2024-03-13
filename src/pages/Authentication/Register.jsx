import { Link } from "react-router-dom";
import { useState } from "react";
import FirebaseInitialization from '../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Register () {

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    return (
        <section>
        <div className="container-fluid bg-light p-5">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="registerFirstName" className="text-dark mb-2">First Name:</label>
                    <input type="text" placeholder="First Name" id="registerFirstName" className="form-control mb-2" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="registerLastName" className="text-dark mb-2">Last Name:</label>
                    <input type="text" placeholder="Last Name" id="registerLastName" className="form-control" />
                </div>
            </div>

            <label htmlFor="registerEmail" className="text-dark mb-2">Email:</label>
            <input type="email" placeholder="yourname@sample.com" id="registerEmail" className="form-control" />

            <label htmlFor="registerPassword" className="text-dark mt-2">Password:</label>
            <input type="Password" id="registerPassword" className="form-control mb-3" />

            <button className="btn btn-primary mb-4">Create an Account</button>

            <p className="text-dark">Already have an account? <Link to='login'>Login here</Link></p>


        </div>
        </section>
    )
}
export default Register;