import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink className="nav-item nav-link" activeClassName="active" to='/search'>Search</NavLink>
                <NavLink className="nav-item nav-link" activeClassName="active" to='/add'>Add a Movie</NavLink>
                </div>
            </div>
        </nav>
    )
}

