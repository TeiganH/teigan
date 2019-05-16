import React, { Component } from 'react'
import Title from './Title.scss'

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="title" data-text="TEIGAN⋮">TEIGAN⋮ </div> 
        <div className="title-2">design/dev/data</div>
      </div>
    )
  }
}
