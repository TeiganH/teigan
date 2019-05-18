import React, { Component } from 'react'
import me from './teigan.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
          <img className="about-img" src={me} alt="me" /> 
          <h3>Front-End Developer & Designer<br /> 
          Future I/O psychologist
          <br />
          Artist</h3>
          <p />
          In web development user experience comes first. A site that is easy, intuitive, and attractive gives the user a pleasant experience. When a user trusts an organization's app to reflect the culture of the org and how they will treat their clients.
          <p />
          I can help with the impact that your site and app has on your clients using programming, UX design, and psychology driven knowledge of human behavior.
          <p /> 
          <h3>Let's create something awesome together!</h3>
      </div>
    )
  }
}
