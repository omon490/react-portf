import "./Header.css"
import {useLanguage} from '../../Context/Language'
import Localization from '../../Localization'

import {Link} from "react-router-dom"


import Logo from "../../img/site-bottom-logo.png"

function Header() {

  const [language, setLanguage] = useLanguage()

  const TEXT = Localization[language]

  const languageChange = e => setLanguage(e.target.value)

  return (
<>
  <header className="site-header">
    <div className="container">
      <div className="site-header-wrapper">
        <a className="site-header-link" href="index.html">
          <img className="site-logo" src={Logo} alt="site-logo" width="80" height="100" />
        </a>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item navbar-item-active">
              <Link className="navbar-link" to="/">{TEXT.home}</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/about">{TEXT.aboutMe}</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/portfolio">{TEXT.portfolio}</Link>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">Trafalgar</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://dw-warehouse.netlify.app/" target="blank">Data
                    Werehouse</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">Pixer</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://hw-visiting.netlify.app/" target="blank">Visiting card</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://bookmark-full.netlify.app/" target="blank">Bookmark</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://fylo-omon.netlify.app/" target="blank">Fylo</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://electron-wallet.netlify.app/" target="blank">Electron
                    Wallet</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">Apple Watch</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://easy-bank-omon.netlify.app/" target="blank">Easy Bank</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://alivio.netlify.app/" target="blank">Alivio</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="https://thousand-sunny.netlify.app/" target="blank">Thousand
                    Sunny</a>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="blog.html">{TEXT.blog}</a>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact">{TEXT.contact}</Link>
            </li>
            <li className="navbar-item">
              <div className="select">
              <select className="navbar-select" defaultValue={language}
              onChange={languageChange}>
                <option className="option" value="en">English</option>
                <option className="option" value="ru">Русский</option>
                <option className="option" value="uz">O'zbek</option>
              </select>
              </div>
            </li>
          </ul>
          <a className="tel-link" href="tel:+9984901174">+998 97 490 11 74</a>
        </nav>
      </div>
    </div>
  </header>

</>
)
}

export default Header
