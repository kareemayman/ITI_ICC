import { faClapperboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="movies-navbar">
      <h1>
        <FontAwesomeIcon icon={faClapperboard}></FontAwesomeIcon> Movies
      </h1>

      <nav>
        <Link to="/" className="navbar-link">
          Movies
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact Us
        </Link>
      </nav>
    </div>
  )
}
