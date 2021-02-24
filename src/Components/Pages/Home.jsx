import "./Home.css"
import {useLanguage} from '../../Context/Language'
import Localization from '../../Localization'

function Home () {

  const [language, setLanguage] = useLanguage()

  const TEXT = Localization[language]

  const languageChange = e => setLanguage(e.target.value)

  return(
    <>
     <section className="intro-section">
    <div className="container">
      <div className="intro-wrapper">
        <div className="intro-heading-wrapper">
          <h1 className="intro-heading">{TEXT.introHeading}</h1>
          <p className="intro-text">{TEXT.introText}</p>
        </div>
      </div>
    </div>
  </section>

  <section className="intro-youtube">
    <div className="container">
      <div className="intro-youtube-wrapper">
        <div className="heading-wrapper">
          <h2 className="intro-youtube-heading">{TEXT.introYouTubeHeading}</h2>
          <p className="intro-youtube-text">{TEXT.introYouTubeText}</p>
        </div>
        <iframe className="youtube-video" width="460" height="315" src="https://www.youtube.com/embed/wxds6MAtUQ0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </section>
    </>
  )
}

export default Home