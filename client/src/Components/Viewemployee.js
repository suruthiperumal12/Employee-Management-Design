import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Componentstyles/viewemployee.css";
import { useNavigate, useLocation } from "react-router-dom";
export default function Viewemployee() {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state?.employee || {};
  const moveBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div onClick={moveBack} className="viewheader">
        <FontAwesomeIcon icon={faArrowLeft} className="arrowicon" />
        <h1> View Employee</h1>
      </div>
      <p className="info">
        <FontAwesomeIcon icon={faUser} />
        Personal Infomation
      </p>
      <div className="m-5 empdetials">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label>ID</label>
              <p>{employee.empID}</p>
            </div>
            <div className="mb-3">
              <label>Name</label>
              <p>{employee.name}</p>
            </div>
            <div className="mb-3">
              <label>Department</label>
              <p>{employee.department}</p>
            </div>
            <div className="mb-3">
              <label>Project</label>
              <p>{employee.project}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label>Designation</label>
              <p>{employee.designation}</p>
            </div>
            <div className="mb-3">
              <label>Type</label>
              <p>{employee.type}</p>
            </div>
            <div className="mb-3">
              <label>Status</label>
              <p>{employee.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
