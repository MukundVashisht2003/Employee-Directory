import EmployeeStore from "../../Store/EmployeeStore";
import { useState } from "react";
import axios from "axios";
import './Delete.scss'      

function Delete() {
  const Id = EmployeeStore((state) => state.Id);
  const setId = EmployeeStore((state) => state.setId);
  const setIsOpen = EmployeeStore((state) => state.setIsOpen);
  const [deleting1 , setDeleting] = useState(false);

  const handleDeleteEmployee = async () => {
    setDeleting(true);
    await axios.delete(`http://localhost:5016/api/Employee/${Id}`)
    .then((response) => {
      console.log(response);
      setId(undefined);
      setIsOpen(false);
      setDeleting(false);
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleClose = () => {
    setId(undefined);
    setIsOpen(false);
  }

  return (
    <>
      {deleting1 ? (
        <div className="delete__overlay">
          <div className="delete__modal">
            <h1>Deleting...</h1>
          </div>
        </div>
      ) : (
        <div className="delete__overlay" onClick={handleClose}>
          <div className="delete__modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="delete__title">Delete</h2>
            <p className="delete__message">Are you sure you want to delete this data?</p>
            <div className="delete__actions">
              <button
                className="delete__actions-button delete__actions-button--confirm"
                onClick={handleDeleteEmployee}
              >
                Confirm
              </button>
              <button
                className="delete__actions-button delete__actions-button--cancel"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Delete;