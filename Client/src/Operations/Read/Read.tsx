import { Link } from "react-router-dom";
import "./Read.scss";
import axios from "axios";
import { useEffect} from "react";
import { EmployeeStore } from "../../Store/EmployeeStore";


function Read() {
  const Employees = EmployeeStore().Employees
  const setEmployees = EmployeeStore().setEmployees
  const getEmployee = EmployeeStore().getEmployee

  

  useEffect(() => {
    const fetchEmployees = async () => {
      axios.get('http://localhost:5016/api/Employee')
      .then((response) => {
        setEmployees(response.data);
        console.log(Employees);
      })
      
    };

    fetchEmployees();
  }, []);

  const deleteEmployee = async (id: number) => {
    
  };

  return (
    <div className='read'>
      <div className='read__content'>
        <h1 className='read__header'>Employee Directory</h1>
        <Link to="/Create" className='read__button read__button--add btn btn-warning'>ADD</Link>

        <table className="read__table table table-striped table-hover table-responsive table-bordered">
          <thead className="read__table-head table-dark">
            <tr className="read__table-row">
              <th className="read__table-header">Employee ID</th>
              <th className="read__table-header">Name</th>
              <th className="read__table-header">Email</th>
              <th className="read__table-header">Age</th>
              <th className="read__table-header">Department</th>
              <th className="read__table-header">Action</th>
            </tr>
          </thead>
          <tbody className="read__table-body">
            {
              Employees.map((employee, id) => (
                <tr key={id} className="read__table-row">
                  <td className="read__table-data">{employee.ID}</td>
                  <td className="read__table-data">{employee.Name}</td>
                  <td className="read__table-data">{employee.Email}</td>
                  <td className="read__table-data">{employee.Age}</td>
                  <td className="read__table-data">{employee.Department}</td>
                  <td className="read__table-data">
                    <Link to={`/Update`} className='read__button read__button--update btn btn-danger me-2'>Update</Link>
                    <button onClick={() => deleteEmployee(employee.ID)} className='read__button read__button--delete btn btn-success'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Read;