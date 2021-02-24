import "./About.css"

import Img from '../../img/aboume-bgg.png'

function About () {
  return (
    <>
      <section className="about-me">
    <div className="container">
      <img className="about-img" src={Img} alt="img man" width="411" height="607" />
      <div className="about-wrapper">
        <ul className="about-me-list">
          <li className="about-me-item about-name">Name</li>
          <li className="about-me-item about-age">Age</li>
          <li className="about-me-item about-email">E-mail</li>
          <li className="about-me-item about-adress">Adress</li>
          <li className="about-me-item about-subject">Subject</li>
          <li className="about-me-item about-freelance">Freelance</li>
        </ul>
        <ul className="about-me-feature">
          <li className="about-me-feature-item about-omon">Omon</li>
          <li className="about-me-feature-item about-25">25</li>
          <li className="about-me-feature-item about-omonbekmurodov">
            <a className="about-me-feature-link" href="https://omonbekmurodov@gmail.com" target="blank">omonbekmurodov@gmail.com</a>
          </li>
          <li className="about-me-feature-item about-choshtepa">44 Choshtepa Tashkent</li>
          <li className="about-me-feature-item about-junior">Junior Developer</li>
          <li className="about-me-feature-item about-date">till September 10, 2020</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  )
}

export default About