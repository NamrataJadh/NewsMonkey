import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">IndiaNews</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                WorldNews
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">US</a></li>
                                    <li><a className="dropdown-item" href="/">UK</a></li>
                                    <li><a className="dropdown-item" href="/">China</a></li>
                                    <li><a className="dropdown-item" href="/">Japan</a></li>
                                    <li><a className="dropdown-item" href="/">France</a></li>
                                    <li><a className="dropdown-item" href="/">Germany</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Business</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Entertainment</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">General</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Health</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Science</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Sports</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Technology</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Trending Topics
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">#SushantSinghRajput</a></li>
                                    <li><a className="dropdown-item" href="/">#Budget2k23</a></li>
                                    <li><a className="dropdown-item" href="/">#BigBoss</a></li>
                                    <li><a className="dropdown-item" href="/">#Bitcoin</a></li>
                                    <li><a className="dropdown-item" href="/">#SharkTank</a></li>
                                    <li><a className="dropdown-item" href="/">#MicrosoftLayoffs</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control form-control-sm me-1" type="search" placeholder="Search for News/Photos/Videos" aria-label="Search"/>
                            <button className="btn btn-sm btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}
