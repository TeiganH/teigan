import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="tag tag-body">&lt;body&gt;</div>
        <p />
        <div className="tag tag-h1">&nbsp;&nbsp;&nbsp;&nbsp; &lt;h1&gt;</div>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp; Hello, world!</h1>
        <div className="tag tag-h1">&nbsp;&nbsp;&nbsp;&nbsp; &lt;/h1&gt;</div>
        <p />
        <div className="tag tag-words">&nbsp;&nbsp;&nbsp;&nbsp; &lt;main&gt;</div>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp; I am Teigan, a remote Freelancer specializing in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creative front-end development.</h2>
        <div className="tag tag-words">&nbsp;&nbsp;&nbsp;&nbsp; &lt;/main&gt;</div>
        <p />
      <div className="tag tag-body">&lt;/body&gt;</div>
    </div>
  )
}
