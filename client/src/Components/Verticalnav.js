import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faCalendarAlt,
  faEnvelope,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "../Componentstyles/vertical.css";
export default function Verticalnav({ show, setShowNav }) {
  const togglehide = () => setShowNav(false);
  return (
    <div className={`nav-container ${show ? "show" : "hide"}`}>
      <div className="closeicon" onClick={togglehide}>
        <FontAwesomeIcon icon={faClose} />
      </div>
      <div className="nav-detials">
        <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </a>
        <a href="#" className="nav-link active">
          <FontAwesomeIcon icon={faUsers} /> Employee
        </a>
        <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faCalendarAlt} /> Calendar
        </a>
        <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faEnvelope} /> Messages
        </a>
      </div>
    </div>
  );
}
