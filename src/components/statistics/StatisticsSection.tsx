import oval from "../../assets/images/oval.svg"
import brandIcon from "../../assets/images/icon-brand-recognition.svg"
import recordIcon from "../../assets/images/icon-detailed-records.svg"
import customizableIcon from "../../assets/images/icon-fully-customizable.svg"
import "./Statistics.css";
import Shortener from "../shortener/Shortener";

const StatisticsSection = () => {
  return (
    <section className="stats" id="features">
      <div className="container stats-container">
        <div className="shortener-container">
          <Shortener />
        </div>
        <div className="stats-header">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="stats-row">
          <div className="stats-card card1">
            <div className="card-image">
              <img className="oval" src={oval} alt="Oval" />
              <img className="card-icon" src={brandIcon} alt="Brand Recognition" />
            </div>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className="stats-card card2">
            <div className="card-image">
              <img className="oval" src={oval} alt="Oval" />
              <img className="card-icon" src={recordIcon} alt="Detailed Records" />
            </div>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className="stats-card card3">
            <div className="card-image">
              <img className="oval" src={oval} alt="Oval" />
              <img className="card-icon" src={customizableIcon} alt="Fully Customizable" />
            </div>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection