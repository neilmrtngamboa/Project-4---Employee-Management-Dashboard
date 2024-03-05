import { Outlet, Link } from "react-router-dom";

function Layout () {
    return (
         <main className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-2" to='/'>Employee Management Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to='employeelist'>Employee List</Link>
                            <Link className="nav-link" to='employeecard'>Employee Card</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid p-5">
                <Outlet />
            </div>

            <footer className="bg-danger text-center text-black p-3 mt-auto">
                    <h5 className="fw-bold">Employee Management Dashboard</h5>
                    <small className="fw-light">A project by Neil Martin Gamboa</small>
                    <div><small className="fw-light">BASE404™</small></div>

            </footer>
        </main>
        
    )
}

export default Layout;