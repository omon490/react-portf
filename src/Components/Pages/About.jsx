import "./About.css"

import {useLanguage} from '../../Context/Language'

import Localization from '../../Localization'

import Img from '../../img/aboume-bgg.png'

function About () {

  const [language, setLanguage] = useLanguage()

  const TEXT = Localization[language]

  const languageChange = e => setLanguage(e.target.value)

  return (
    <>
      <section className="about-me">
    <div className="container">
      <img className="about-img" src={Img} alt="img man" width="411" height="607" />
      <div className="about-wrapper">
        <ul className="about-me-list">
          <li className="about-me-item about-name">{TEXT.name}</li>
          <li className="about-me-item about-age">{TEXT.age}</li>
          <li className="about-me-item about-email">{TEXT.eMail}</li>
          <li className="about-me-item about-adress">{TEXT.address}</li>
          <li className="about-me-item about-subject">{TEXT.subject}</li>
          <li className="about-me-item about-freelance">Freelance</li>
        </ul>
        <ul className="about-me-feature">
          <li className="about-me-feature-item about-omon">{TEXT.omon}</li>
          <li className="about-me-feature-item about-25">25</li>
          <li className="about-me-feature-item about-omonbekmurodov">
            <a className="about-me-feature-link" href="https://omonbekmurodov@gmail.com" target="blank">omonbekmurodov@gmail.com</a>
          </li>
          <li className="about-me-feature-item about-choshtepa">{TEXT.address44}</li>
          <li className="about-me-feature-item about-junior">{TEXT.developer}</li>
          <li className="about-me-feature-item about-date">{TEXT.date}</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  )
}

export default About