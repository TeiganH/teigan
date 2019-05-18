import React from 'react'
import blackthumb from './blackthumb.png'
import streetstagram from './streetstagram.png'
import chumleys from './chumleys.jpeg'
import iss from './iss.png'
import github from './GitHub-Mark-Light-32px.png'

export default function Work() {
  return (
    <div className="container">
      <h1>Work</h1>
      <div className="work-container">
        <img className="work-img black-thumb" src={blackthumb} alt="black thumb" />
        <div className="work-desc">
          Dev & Design: Full-stack React, Ruby on Rails, Postgres Database
        </div>
        <div className="work-link-container">
          <a href="http://black-thumb.surge.sh" target="_blank" rel="noopener noreferrer">http://black-thumb.surge.sh/</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img className="work-link" src={github} alt="github" />
          <a href="https://github.com/TeiganH/black-thumb">Github</a>
        </div>
      </div>
      <div className="work-container">
        <img className="work-img chumleys" src={chumleys} alt="chumleys" />
        <div className="work-desc">
          Agile dev paired with UX: Front-end React
        </div>
        <div className="work-link-container">
          <a href="http://chumleys-app.surge.sh/" target="_blank" rel="noopener noreferrer">http://chumleys-app.surge.sh</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img className="work-link" src={github} alt="github" />
          <a href="https://github.com/TeiganH/Chumleys">Github</a>
        </div>
      </div>
      <div className="work-container">
        <img className="work-img streetstagram" src={streetstagram} alt="streetstagram" />
        <div className="work-desc">
          Agile dev & design: Fullstack React, Express, Sequelize, Node, and AWS
        </div>
        <div className="work-link-container">
          <a href="https://streetstagram.herokuapp.com/" target="_blank">https://streetstagram.herokuapp.com</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img className="work-link" src={github} alt="github" />
          <a href="https://github.com/TeiganH/Streetsagram" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className="work-container">
        <img className="work-img iss" src={iss} alt="iss" />
        <div className="work-desc">
          Design & Dev: External API, React
        </div>
        <div className="work-link-container">
          <a href="https://warm-reef-45637.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://warm-reef-45637.herokuapp.com/</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img className="work-link" src={github} alt="github" />
          <a href="https://github.com/TeiganH/where-is-iss">Github</a>
        </div>
      </div>
     
      
      
      


    </div>
  )
}
