import React from 'react'
import "../App.css"
import "../styles/Shadows.css"
import Button from './Button'

const Card = () => {
  return (
    <>
      <div className="projects__card-padding">
        <div className="projects__card-container drop-shadow">
          <div className="projects__card-contents-container">
            <img src="src\assets\mid-shot.jpeg"/>
            <h2>Example Project</h2>
            <p>brief description</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card