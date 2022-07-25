import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "grey" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div>
              <Link to="/" className="navbar-brand">Home</Link>
              <Link to="/" className="navbar-brand">Products</Link>
            </div>
          </div>
        </div>
      </nav>
      <h1 style={{ margin: "2%" }}>Welcome to My Music-G</h1>
    </div>
  )
}
