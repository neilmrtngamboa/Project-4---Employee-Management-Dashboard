import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

            <button className="btn btn-light">Sign In</button>

            <p className="mt-3">Don't have an account? <Link to='/regiter' className="text-dark">Register here</Link></p>
        </div>
        </>
    )
}
export default Login;