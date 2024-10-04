import React from "react";
import "../Componentstyles/modal.css";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content" style={{ background: "white" }}>
          <h2>Confirmation</h2>
          <p>Are you sure you want to delete this employee?</p>
          <div className="modal-actions">
            <button className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="btn-delete" onClick={onConfirm}>
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
