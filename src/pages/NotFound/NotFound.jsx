import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="errorContainer">
      <h1>404: Page Not Found</h1>
      <Link className="link" to="/">
        <p>go back to home page</p>
      </Link>
    </div>
  );
};
