import React from 'react'
import propTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-light`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">About</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/AddCart">AddCart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/products">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addproduct">{props.aboutText}</a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: propTypes.string,   //! Datatypes of prop 
  aboutText: propTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Home',          //!defaultProps take if we miss the to send props
  aboutText: 'AddProduct'

}