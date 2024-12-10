import React from 'react'
import "../App.css"
import "../styles/Nav.css"

const Contact = () => {
  return (
    <section id="contact">
        <p className="profile__text-title">
            Reach out
        </p>
        <h1 className="profile__text-name">Contact Me</h1>
        <div className="contact-info-container">
            <div className="contact-method-container">
                <img src="src\assets\email icon.png" alt="email icon" className='contact-icon' style={{ height: '3.2rem' }} />
                    <a className="fs-3 hover-underline nav-link " href="mailto:keelagherj@gmail.com">
                        KeelagherJ@gmail.com
                    </a>
            </div>
            <div className="contact-method-container">
            <img src="src/assets/linkedin icon.png" alt="linkedin icon" className="contact-icon"  />
                <a className="fs-3 hover-underline nav-link " href="https://www.linkedin.com/in/joseph-keelagher-b67170292/" target="_blank">
                    LinkedIn
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact