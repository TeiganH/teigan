import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <div className="quote-box">								
        <div className="quote">
          <span>“Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation, by children being taught mathematical concepts... 
          <p />  
            A graphic representation of data abstracted from banks of every computer in the human system. Unthinkable complexity. Lines of light ranged in the nonspace of the mind, clusters and constellations of data. Like city lights, receding...”<p /></span> 
          <span className="cite"> ― William Gibson, Neuromancer</span>
        </div>
        <div className="arrow">⇟</div>			
      </div>
    )
  }
}
