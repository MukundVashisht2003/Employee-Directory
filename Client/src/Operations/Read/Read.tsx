import { Link } from "react-router-dom"
import "./Read.scss"
import axios from "axios";
import { useEffect ,useState} from "react";

function Read() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7262/api/Employees')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  
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
              users.map((user, id) => (
                <tr key={id} className="read__table-row">
                  <td className="read__table-data">{user.ID}</td>
                  <td className="read__table-data">{user.Name}</td>
                  <td className="read__table-data">{user.Email}</td>
                  <td className="read__table-data">{user.Age}</td>
                  <td className="read__table-data">{user.Department}</td>
                  <td className="read__table-data">
                    <Link to={`/Update`} className='read__button read__button--update btn btn-danger me-2'>Update</Link>
                    <button className='read__button read__button--delete btn btn-success'>Delete</button>
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

export default Read