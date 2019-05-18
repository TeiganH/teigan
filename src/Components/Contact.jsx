import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        You can find me on the interwebs! 
        <ul>
          <li><a href="https://www.linkedin.com/in/teiganhockman/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/teiganh" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.instagram.com/culture_crime/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="mailto:teigan.hockman@gmail.com?Subject=Web%20Development%20Consultation" target="_top">Email</a></li>
        </ul>

        I am also available for branding, artistic projects, and hand-drawn illustrations.
      </div>
    )
  }
}
