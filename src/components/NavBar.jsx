import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Routing App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to='/about' className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='contact' className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='login' className="nav-link">Log in</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
