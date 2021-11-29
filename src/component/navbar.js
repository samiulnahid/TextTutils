import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
             
             
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            {/* //// light / dark korar jonne. input ar maje onClick use kora hoise
            /// className ar vitor {} and `` use kora hoise jeno js code likha jai  */}
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText} darkMode</label>
            </div>

             
          </div>
        </div>
      </nav>
    )
}

//propTypes props a jsob perameter asbe ta strict ki type ar hobe ta akhane bola hoise..onno type ar hole error asbe. 
//ata deoya hoise muloto oi type e cai amr atar jonne. jodi amr sob doroner type holeo problem hobe na ta hole ata use korbo na

Navbar.propTypes = {
                    title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
                }

// props pass jodi na kore hoi ta hole default vabe ai value nibe

Navbar.defaultProps = {
  title: 'Default title here',
  aboutText:'Default about text here'
};