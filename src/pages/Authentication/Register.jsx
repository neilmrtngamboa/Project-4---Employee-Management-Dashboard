import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import FirebaseInitialization from '../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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
        <section>
        <div className="container-fluid bg-light p-5">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="registerFirstName" className="text-dark mb-2">First Name:</label>
                    <input type="text" placeholder="First Name" id="registerFirstName" className="form-control mb-2"
                    onChange={(e) => setUserFirstName(e.target.value)} value={userFirstName}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="registerLastName" className="text-dark mb-2">Last Name:</label>
                    <input type="text" placeholder="Last Name" id="registerLastName" className="form-control"
                    onChange={(e) => setUserLastName(e.target.value)} value={userLastName}
                    />
                </div>
            </div>

            <label htmlFor="registerEmail" className="text-dark mb-2">Email:</label>
            <input type="email" placeholder="yourname@sample.com" id="registerEmail" className="form-control"
            onChange={(e) => setEmail(e.target.value)} value={email}
            />

            <label htmlFor="registerPassword" className="text-dark mt-2">Password:</label>
            <input type="Password" id="registerPassword" className="form-control mb-3"
            onChange={(e) => setPassword(e.target.value)} value={password}
            />

            <label htmlFor="confirmPassword" className="text-dark mt-2">Confirm Password:</label>
            <input type="Password" id="confirmPassword" className="form-control mb-3"
            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
            />

            <button className="btn btn-primary mb-4" onClick={() => RegisterAccount()}>Create an Account</button>

            <p className="text-dark">Already have an account? <Link to='/login'>Login here</Link></p>

        </div>
        </section>
    )
}
export default Register;