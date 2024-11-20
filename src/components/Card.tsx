import React from 'react'
import "../App.css"
import "../styles/Shadows.css"

const Card = () => {
  return (
    <>
        <div className="project-card drop-shadow" style={{width: '20rem'}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="project-card-body">
                <h5 className="card-title">Example Project</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">GitHub</a>
            </div>
        </div>
    </>
  )
}

export default Card