import "./Footer.css"
import {useLanguage} from '../../Context/Language'
import Localization from '../../Localization'

import Logo from '../../img/site-bottom-logo.png'

function Footer() {

  const [language, setLanguage] = useLanguage()

  const TEXT = Localization[language]

  const languageChange = e => setLanguage(e.target.value)

  return (
    <>
      <footer id="site-footer">
    <div className="container">
      <div className="footer-wrapper">
        <div className="footer-left">
          <a className="site-footer-link" href="index.html">
            <img className="site-footer-img" src={Logo} alt="site-logo" width="80" height="100" />
          </a>
          <p className="site-footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque perferendis accusamus scipit, dolore laudantium aperiam tempora nemo itaque doloremque reprehenderit!</p>
        </div>
          <ul className="footer-mid-list">
            <li className="footer-mid-item">
              <a className="footer-mid-link" href="#">{TEXT.home}</a>
            </li>
            <li className="footer-mid-item">
              <a className="footer-mid-link" href="#">{TEXT.aboutMe}</a>
            </li>
            <li className="footer-mid-item">
              <a className="footer-mid-link" href="#">{TEXT.portfolio}</a>
            </li>
            <li className="footer-mid-item">
              <a className="footer-mid-link" href="#">{TEXT.blog}</a>
            </li>
            <li className="footer-mid-item">
              <a className="footer-mid-link" href="#">{TEXT.contact}</a>
            </li>
          </ul>
          <ul className="social-list">
            <li className="social-item">
              <a className="social-link telegram" href="https://tme.to/Bekmurodov_1174" target="blank">Telegram</a>
            </li>
            <li className="social-item">
              <a className="social-link facebook" href="https://www.facebook.com/omon.bekmurodov.5/" target="blank">Facebook</a>
            </li>
            <li className="social-item">
              <a className="social-link twitter" href="https://twitter.com/BekmurodovOmon" target="blank">Twitter</a>
            </li>
            <li className="social-item">
              <a className="social-link github" href="https://github.com/omon490" target="blank">GitHub</a>
            </li>
            <li className="social-item">
              <a className="social-link linkedin" href="https://www.linkedin.com/in/omon-bekmurodov-058a6b1b9/" target="blank">LinkedIn</a>
            </li>
          </ul>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer