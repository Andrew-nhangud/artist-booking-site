import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link className="home-link" to="/">
            RÉSERVE
          </Link>
        </li>
        <li>
          <Link className="browser-link" to="/browser">
            browser
          </Link>
        </li>
      </ul>
    </nav>
  );
};
