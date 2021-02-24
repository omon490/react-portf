import "./Contact.css"
import {useLanguage} from '../../Context/Language'
import Localization from '../../Localization'

import React from 'react'

function Contact() {

  const [language, setLanguage] = useLanguage()

  const TEXT = Localization[language]

  const languageChange = e => setLanguage(e.target.value)


  return (
    <>
  <section id="contact-form">
    <div className="container">
      <h1 className="contact-heading">
        <span className="contact-heading-text">{TEXT.contactMe}</span>{TEXT.me}
      </h1>
      <p className="contact-text">{TEXT.contactMeText}</p>
      <form className="form" action="https://echo.htmlacademy.ru" method="POST">
        <input className="input" type="text" name="name" placeholder={TEXT.contactName} required />
        <input className="input" type="email" name="email" placeholder={TEXT.contactEmail} required />
        <textarea className="textarea" name="message" cols="30" rows="5" placeholder={TEXT.contactMessage}></textarea>
        <button className="button hvr-buzz" type="submit">{TEXT.contactSubmit}</button>
      </form>
    </div>
  </section>

    </>
  )
}

export default Contact
