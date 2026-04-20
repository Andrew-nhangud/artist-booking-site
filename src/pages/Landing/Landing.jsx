import "./Landing.css";
import landingImage from "../../assets/images/landing-img.jpg";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="landing-container">
      <div className="landing-content">
        <h1>RÉSERVE</h1>
        <Link to="/browser">
          <p className="organiser-option">I'm an Organiser</p>
        </Link>

        <p className="artist-option">I'm an Artist</p>
      </div>
      <img className="landing-img" src={landingImage} alt="Landing Image" />
    </section>
  );
};
