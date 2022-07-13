import "./index.css";
import { Link } from "react-scroll";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

function Navbar({ handleTheme, darkMode }) {
  return (
    <div className="navbar-wrapper" id="Navbar" style={darkMode ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <div className="navbar-left">
        <div className="navbar-name">My Profile</div>
        <div className={darkMode ? "navbar-toggleDark" : "navbar-toggle"} onClick={handleTheme}>
          <Moon />
          <Sun />
          <div className={darkMode ? "navbar-t-buttonDark" : "navbar-t-button"} style={darkMode ? { left: "2px" } : { right: "2px" }}></div>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="/" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" spy={true} smooth={true}>
                Porfolio
              </Link>
            </li>
            <li>
              <Link to="/" spy={true} smooth={true}>
                Experiences
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className={darkMode ? "navbar-buttonDark" : "navbar-button"}>Contact</button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
