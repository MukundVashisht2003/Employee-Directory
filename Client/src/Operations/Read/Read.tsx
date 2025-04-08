import { Link } from "react-router-dom";
import "./Read.scss";
import axios from "axios";
import { useEffect} from "react";
import { EmployeeStore } from "../../Store/EmployeeStore";
import Delete from "../Delete/Delete";

function Read() {
  const Employees = EmployeeStore((state) => state.Employees)
  const setEmployees = EmployeeStore((state) => state.setEmployees)
  const setId = EmployeeStore((state) => state.setId);
  const isOpen = EmployeeStore((state) => state.isOpen)
  const setmodalOpen = EmployeeStore((state) => state.setIsOpen)

  const fetchEmployees = async () => {
    await axios.get('http://localhost:5016/api/Employee')
    .then((response) => {
      setEmployees(response?.data);
      console.log(Employees);
    })
    
  };

  const handledeleteEmployee = async (id: string | undefined) => {
    setmodalOpen(!isOpen);
    setId(id);
  };

  useEffect(() => {
    fetchEmployees();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='read'>
      <div className='read__content'>
        <h1 className='read__header'>Employee Directory</h1>
        <Link to="/Create" className='read__button read__button--add btn btn-warning'>ADD</Link>

        <table className="read__table table table-striped table-hover table-responsive table-bordered">
          <thead className="read__table-head table-dark">
            <tr className="read__table-row">
              <th className="read__table-header">Serial</th>
              <th className="read__table-header">Employee ID</th>
              <th className="read__table-header">Name</th>
              <th className="read__table-header">Position</th>
              <th className="read__table-header">Salary</th>
              <th className="read__table-header">Department</th>
              <th className="read__table-header">Action</th>
            </tr>
          </thead>
          <tbody className="read__table-body">

            {
              Employees?.map((employee,ID) => (
                <tr key={employee.id} className="read__table-row">
                  <td className="read__table-data">{ID+1}</td>
                  <td className="read__table-data">{employee.id}</td>
                  <td className="read__table-data">{employee.name}</td>
                  <td className="read__table-data">{employee.position}</td>
                  <td className="read__table-data">{employee.salary}</td>
                  <td className="read__table-data">{employee.department}</td>
                  <td className="read__table-data">
                    <Link to={`/Update/${employee.id}`} className='read__button read__button--update btn btn-danger me-2' onClick={ () => {setId(employee.id)}}>Update</Link>
                    <button onClick={() => handledeleteEmployee(employee?.id)} className='read__button read__button--delete btn btn-success'>Delete</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
      {isOpen && (
        <Delete />
      )}
    </div>
  )
}

export default Read;