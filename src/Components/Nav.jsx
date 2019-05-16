import React from 'react'
import { NavLink } from 'react-router-dom'
import Work from './Work.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'


export default function Nav() {
  return (
    <div className="nav">
      <nav>
        <ul className="nav-links">
          <li><NavLink to='/'>Home . .</NavLink></li>
          <li><NavLink to='/work'>Work . .</NavLink></li>
          <li><NavLink to='/about'>About . .</NavLink></li>
          <li><NavLink to='/contact'>Contact . .</NavLink></li>
        </ul>
      </nav>
      <div className="triangle" />
      <div className="triangle-2" />
    </div>
  )
}
