import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../Componentstyles/horizontal.css";
import Verticalnav from "./Verticalnav";
import { useState } from "react";

export default function Horizontalnav() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3">
        <h1 className="nav-name">RS-TECH</h1>
        <button onClick={toggleNav} className="toggle-nav-btn">
          {/* <FontAwesomeIcon icon={faBars} /> */}
          Go to dashboard
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shownav"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className=" collapse navbar-collapse" id="shownav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item p-2 icon-container">
              <FontAwesomeIcon icon={faBell} className="icon" />
            </li>
            <li className="nav-item p-2 icon-container">
              <FontAwesomeIcon icon={faCog} className="icon" />
            </li>
            <li className="nav-item p-2 icon-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
            </li>
          </ul>
        </div>
      </nav>
      <Verticalnav show={showNav} setShowNav={setShowNav} />
    </div>
  );
}
