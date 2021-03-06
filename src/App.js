import React, { Component } from 'react'
import './App.css'
import Nav from './Components/Nav.jsx'
import Logo from './Components/Logo.jsx'
import Quote from './Components/Quote.jsx'
import Design from './Components/Design.jsx'
import Main from './Components/Main.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Logo />
        <Design />			
        <Quote />
        <Main />
      </div>
    )
  }
}
