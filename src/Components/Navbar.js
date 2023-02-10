import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                        to="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        WorldNews
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" to="/">US</a></li>
                                        <li><a className="dropdown-item" to="/">UK</a></li>
                                        <li><a className="dropdown-item" to="/">China</a></li>
                                        <li><a className="dropdown-item" to="/">Japan</a></li>
                                        <li><a className="dropdown-item" to="/">France</a></li>
                                        <li><a className="dropdown-item" to="/">Germany</a></li>
                                    </ul>
                        </li> */}
                        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control form-control-sm me-1"
                            type="search"
                            placeholder="Search for News/Photos/Videos"
                            aria-label="Search"
                        />
                        <button className="btn btn-sm btn-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Navbar
