import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import "../Componentstyles/addemployee.css";
import axios from "axios";

export default function Editemployee() {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state?.employee || {
    name: "",
    department: "",
    project: "",
    status: "",
    empID: "",
    designation: "",
    type: "",
  };

  const [formData, setFormData] = useState(employee);
  const [errors, setErrors] = useState({});
  const { empID } = useParams();

  // Move to previous page
  const moveBack = () => {
    navigate("/");
  };

  // Handling input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form fields
  const validateForm = () => {
    const validationErrors = {};
    if (!formData.empID) validationErrors.empID = "Employee ID is required";
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.department)
      validationErrors.department = "Department is required";
    if (!formData.project) validationErrors.project = "Project is required";
    if (!formData.status) validationErrors.status = "Status is required";
    if (!formData.designation)
      validationErrors.designation = "Designation is required";
    if (!formData.type) validationErrors.type = "Type is required";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Perform submit action
  const handleUpdate = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .put(`http://localhost:8081/update/${empID}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("Employee updated successfully", res.data);
          navigate("/"); // Navigate to the home page after a successful update
        })
        .catch((err) => {
          console.error(
            "Error updating employee:",
            err.response ? err.response.data : err
          );
        });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <div onClick={moveBack} className="editheader">
        <FontAwesomeIcon icon={faArrowLeft} className="arrowicon" />
        <h1>Edit Employee</h1>
      </div>
      <p className="info">
        <FontAwesomeIcon icon={faUser} />
        Personal Information
      </p>
      <form className="m-5" onSubmit={handleUpdate}>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="empname" className="form-label">
                Name*
              </label>
              <input
                type="text"
                id="empname"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="empdept" className="form-label">
                Department*
              </label>
              <select
                id="empdept"
                className="form-select"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="IT Support">IT Support</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Sales and Marketing">Sales and Marketing</option>
                <option value="Research and Development">
                  Research and Development
                </option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
              {errors.department && (
                <span className="error-text">{errors.department}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="proj" className="form-label">
                Project
              </label>
              <input
                type="text"
                id="proj"
                className="form-control"
                name="project"
                value={formData.project}
                onChange={handleChange}
              />
              {errors.project && (
                <span className="error-text">{errors.project}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="empstatus" className="form-label">
                Status
              </label>
              <select
                id="empstatus"
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
            {errors.status && (
              <span className="error-text">{errors.status}</span>
            )}
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="empid" className="form-label">
                Employee ID*
              </label>
              <input
                type="number"
                id="empID"
                className="form-control"
                name="empID"
                value={formData.empID}
                onChange={handleChange}
              />
              {errors.empID && (
                <span className="error-text">{errors.empID}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="empdesignation" className="form-label">
                Designation
              </label>
              <select
                id="empdesignation"
                className="form-select"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              >
                <option value="">Select Designation</option>
                <option value="Developer">Developer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Business Analyst">Business Analyst</option>
                <option value="Quality Assurance (QA) Engineer">
                  Quality Assurance (QA) Engineer
                </option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="IT Support Specialist">
                  IT Support Specialist
                </option>
                <option value="Cybersecurity Analyst">
                  Cybersecurity Analyst
                </option>
              </select>
              {errors.designation && (
                <span className="error-text">{errors.designation}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="emptype" className="form-label">
                Type*
              </label>
              <select
                id="type"
                className="form-select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
                <option value="Contract">Contract</option>
                <option value="Intern">Intern</option>
              </select>
              {errors.type && <span className="error-text">{errors.type}</span>}
            </div>
          </div>
        </div>
        <div className="form-btn me-5">
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="btn-confirm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
