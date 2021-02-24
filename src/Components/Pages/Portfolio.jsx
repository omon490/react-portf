import "./Portfolio.css"

import Easybank from "../../img/easybank.jpg"

import DataWare from "../../img/datawere-house.jpg"

function Portfolio() {

  return (
    <>
<section className="portfolio-easybank">
    <div className="container">
      <div className="portfolio-wrapper">
        <div className="left-side">
          <h2 className="portfolio-title">Easy Bank</h2>
          <p className="portfolio-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi omnis ipsam, maiores voluptate praesentium eius eaque fugit exercitationem expedita dolor et necessitatibus veritatis blanditiis ipsum aperiam ipsa?</p>
          <a className="portfolio-link" href="https://easy-bank-omon.netlify.app/" target="blank">View site</a>
        </div>
        <img className="portfolio-img" src={Easybank} alt="" width="500" height="100" />
      </div>
    </div>
  </section>

  <section className="portfolio-dw-house">
    <div className="container">
      <div className="portfolio-wrapper">
        <img className="portfolio-img-dw" src={DataWare} alt="datawerehouse img" width="500" height="100" />
        <div className="right-side">
          <h2 className="portfolio-title">Data Were House</h2>
          <p className="portfolio-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima exercitationem culpa quos dolores impedit magnam nostrum fuga officiis! Iure eum autem sapiente aut esse?</p>
          <a className="portfolio-link" href="https://dw-warehouse.netlify.app/" target="blank">View site</a>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Portfolio
