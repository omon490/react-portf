import "./Contact.css"

import React from 'react'

function Contact() {
  return (
    <>
  <section id="contact-form">
    <div className="container">
      <h1 className="contact-heading">
        <span className="contact-heading-text">Contact</span>Me
      </h1>
      <p className="contact-text">Please fill out the form below to contact me</p>
      <form className="form" action="https://echo.htmlacademy.ru" method="POST">
        <input className="input" type="text" name="name" placeholder="Enter your name" required />
        <input className="input" type="email" name="email" placeholder="Enter your email" required />
        <textarea className="textarea" name="message" cols="30" rows="5" placeholder="Enter you messsage"></textarea>
        <button className="button hvr-buzz" type="submit">Submit</button>
      </form>
    </div>
  </section>

    </>
  )
}

export default Contact
