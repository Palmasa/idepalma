import React from 'react'
import { Link } from 'gatsby'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="navbar__link" activeClassName="navbar__link__active"  to="/">About</Link>
      <Link className="navbar__link" activeClassName="navbar__link__active"  to="/projects">Projects</Link>
      <Link className="navbar__link" activeClassName="navbar__link__active"  to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
