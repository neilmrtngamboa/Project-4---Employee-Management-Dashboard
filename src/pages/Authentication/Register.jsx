import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import FirebaseInitialization from '../Firebase Configuration/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import '../Style/Register.css';

function Register () {

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let GoTo = useNavigate();

    const RegisterAccount = () => {

        if (userFirstName !== '' && userLastName !== '' && password !== '' && confirmPassword !== '' 
        && password === confirmPassword ){

            const auth = getAuth(FirebaseInitialization);
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
                const user = userCredential.user;

                updateProfile(auth.currentUser, {
                    displayName: userFirstName + ' ' + userLastName
                  });
                alert('Account creation successful!')

                GoTo('/');
                
            })
            .catch((error) => {
                alert('registration failed!');
                
            });

            

        }else {
            
            alert('Please fill out the empty fields or your password does not match!');
        }

       
    }

    
    return (
        <section className="main">
        <div className="container-fluid rounded p-5" id="container">
        <h1> Register an Account</h1>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="registerFirstName" className="mb-2">First Name:</label>
                    <input type="text" placeholder="Juan" id="registerFirstName" className="form-control mb-2"
                    onChange={(e) => setUserFirstName(e.target.value)} value={userFirstName}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="registerLastName" className="mb-2">Last Name:</label>
                    <input type="text" placeholder="Dela Cruz" id="registerLastName" className="form-control"
                    onChange={(e) => setUserLastName(e.target.value)} value={userLastName}
                    />
                </div>
            </div>

            <label htmlFor="registerEmail" className="mb-2">Email:</label>
            <input type="email" placeholder="yourname@sample.com" id="registerEmail" className="form-control"
            onChange={(e) => setEmail(e.target.value)} value={email}
            />

            <label htmlFor="registerPassword" className="mt-2">Password:</label>
            <input type="Password" id="registerPassword" className="form-control mb-3"
            onChange={(e) => setPassword(e.target.value)} value={password}
            />

            <label htmlFor="confirmPassword" className="mt-2">Confirm Password:</label>
            <input type="Password" id="confirmPassword" className="form-control mb-3"
            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
            />

            <button className="btn btn-light mb-4" id="create" onClick={() => RegisterAccount()}>Create an Account</button>

            <p className="">Already have an account? <Link to='/login' id="login">Login here</Link></p>

        </div>
        </section>
    )
}
export default Register;