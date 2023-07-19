import React from 'react'
import {Link} from 'react-router-dom'


export default function Navigationbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/Home">Souvik.</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link"  to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Education">Education</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/ContactMe">Contact me</Link>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
}
