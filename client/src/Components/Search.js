import { useEffect, useState } from "react";
import "../Componentstyles/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faPlus,
  faEdit,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Modal from "./Modal";
import Viewemployee from "./Viewemployee";

export default function Search() {
  const navigate = useNavigate();
  const [emp, setEmp] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployee] = useState([]);
  const [selectedEmpID, setSelectedEmpID] = useState(null); // Store selected empID

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        console.log(res);
        setEmployee(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addNewEmployee = () => {
    navigate("/addemployee");
  };

  const editemployee = (employee) => {
    navigate(`/editemployee/${employee.empID}`, { state: { employee } });
  };

  const viewemployee = (employee) => {
    navigate("/viewemployee", { state: { employee } });
  };

  // Open modal and store selected employee ID
  const deleteEmployee = (empID) => {
    setSelectedEmpID(empID); // Save the empID of the employee to be deleted
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete("http://localhost:8081/delete/" + selectedEmpID);
      setEmployee((prevEmployees) =>
        prevEmployees.filter((employee) => employee.empID !== selectedEmpID)
      );
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Employee</h1>
        <div className="search">
          <input
            className="input-control"
            type="text"
            onChange={(e) => setEmp(e.target.value)}
            value={emp}
            placeholder="Search"
          />
          <button className="custom-btn" onClick={addNewEmployee}>
            <FontAwesomeIcon icon={faPlus} className="icon-plus" /> Add New
            Employee
          </button>
        </div>
      </div>
      <div className="table-container">
        <div className="table-responsive">
          <table className="employee-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Project</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    No results found
                  </td>
                </tr>
              ) : (
                employees.map((employee) => (
                  <tr key={employee.empID}>
                    <td>{employee.empID}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.project}</td>
                    <td>{employee.type}</td>
                    <td>{employee.status}</td>
                    <td>
                      <button className="icon-btn">
                        <FontAwesomeIcon
                          icon={faEdit}
                          title="Edit"
                          onClick={() => editemployee(employee)}
                        />
                      </button>
                      <button className="icon-btn">
                        <FontAwesomeIcon
                          icon={faTrash}
                          title="Delete"
                          onClick={() => deleteEmployee(employee.empID)} // Pass empID
                        />
                      </button>
                      <button className="icon-btn">
                        <FontAwesomeIcon
                          icon={faEye}
                          title="View"
                          onClick={() => viewemployee(employee)}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleDeleteConfirm} // Confirm deletion using the stored empID
      />
    </div>
  );
}
