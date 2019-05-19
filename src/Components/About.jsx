import React, { Component } from 'react'
import me from './teigan.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
          <img className="about-img" src={me} alt="me" /> 
          <h3>Front-End Developer & Designer<br /> 
          Data Analyst<br />
          Future I/O psychologist
          <br />
          Artist</h3>
          <p />
          In web development user experience comes first. A site that is easy, intuitive, and attractive gives the user a pleasant experience, where a user trusts an organization's app to reflect the culture of the org and how they will treat their clients.
          <p />
          I can help with the impact that your site and app has on your clients using programming, UX design, and psychology driven knowledge of human behavior.
          <p /> 
          <h3>Let's create something awesome together!</h3>
          <br /> <br /><br />
          SPSS | R | D3.js | Python | 
          HTML5 | CSS3 | React | Javascript | Rails | Ruby |
          PostGresql | Photoshop | Git | Express | AWS | Node
      </div>
    )
  }
}
