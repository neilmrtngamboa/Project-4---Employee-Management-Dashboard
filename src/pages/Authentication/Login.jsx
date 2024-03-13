import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseInitialization from '../FirebaseConfig';

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let GoTo = useNavigate();

    const signIn = () => {

        if (email !== '' && password !== '' ){

            const auth = getAuth(firebaseInitialization);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                // Signed up 
                const user = userCredential.user;
                // ...
                alert('signed in!')
                GoTo('/employeelist')
            })
            .catch((error) => {
                alert('error!')
                const errorCode = error.code;
                const errorMessage = error.message; 
                // ..
            });

        }else {
            
            alert('Please fill out the empty fields!');
        }
    }

    return (
        <>
        <div className="container-fluid bg-primary p-3 my-auto">
            <h1 className="m-3">Login</h1>
            <input type="email" className="form-control mb-3" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} value={email}
            />
            <input type="password" className="form-control mb-3" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} value={password}
            />

            <button className="btn btn-light" onClick={() => signIn()}>Sign In</button>

            <p className="mt-3">Don't have an account? <Link to='/register' className="text-dark">Register here</Link></p>
        </div>
        </>
    )
}
export default Login;