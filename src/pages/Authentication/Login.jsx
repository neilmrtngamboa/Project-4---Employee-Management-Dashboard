import { Link } from "react-router-dom";

function Login () {
    return (
        <>
        <div className="container-fluid bg-primary p-3 my-auto">
            <h1 className="m-3">Login</h1>
            <input type="email" className="form-control mb-3" placeholder="Email" />
            <input type="password" className="form-control mb-3" placeholder="Password" />

            <button className="btn btn-light">Sign In</button>

            <p className="mt-3">Don't have an account? <Link to='/regiter' className="text-dark">Register here</Link></p>
        </div>
        </>
    )
}
export default Login;