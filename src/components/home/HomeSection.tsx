import homeMain from "../../assets/images/illustration-working.svg"
// import Shortener from "../shortener/Shortener";
import "./Home.css";

const HomeSection = () => {
  return (
    <section className="home">
      <div className="container home-container">
        <div className="home-info">
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>
        <div className="home-image">
          <img src={homeMain} alt="Image of person on computer" />
        </div>
      </div>
      {/* <div className="shortener-container">
        <Shortener />
      </div> */}
    </section>
  )
}

export default HomeSection