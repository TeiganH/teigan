import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Work from './Work.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path="/work" component={Work}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    )
  }
}
