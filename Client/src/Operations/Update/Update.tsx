import { useEffect, useState} from 'react'
import EmployeeStore from '../../Store/EmployeeStore'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Update.scss'

export const Update = () => {
  const Id = EmployeeStore((state) => state.Id);
  const [Name, setName] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [salary, setSalary] = useState<number>(0)
  const [Department, setDepartment] = useState<string>('')
  const navigate = useNavigate()
  
  useEffect(() => {
    const response = axios.get(`https://localhost:7262/api/Employee/${Id}`)
    response.then((res) => {
      setName(res.data.name)
      setDepartment(res.data.department)
      setPosition(res.data.position)
      setSalary(res.data.salary)
    })
  },[Id])
  
  const handleSubmit = (e : React.FormEvent ) => {
    e.preventDefault()
    axios.put(`http://localhost:7262/api/Employee/${Id}`, { Id, Name, position, salary, Department })
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating user data:', error))
  }

  return (
    <div className="update">
      <div className="update__container mt-5">
        <h2 className="update__title mb-4">Update User Information</h2>
        <form className="update__form" onSubmit={handleSubmit}>
          <div className="update__form-group form-group">
            <label htmlFor="id" className="update__label">Employee ID</label>
            <input type="text" className="update__input form-control" id="id" value={Id}  disabled />
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="name" className="update__label">Name</label>
            <input type="text" className="update__input form-control" id="name" value={Name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="text" className="update__label">Position</label>
            <input type="text" className="update__input form-control" id="email" value={position} onChange={(e) => setPosition(e.target.value)} required/>
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="age" className="update__label">Salary</label>
            <input type="number" className="update__input form-control" id="age" value={salary} onChange={(e) => setSalary(Number(e.target.value))} required/>
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="department" className="update__label">Department</label>
            <input className="update__input form-control" id="department" value={Department} onChange={(e) => setDepartment(e.target.value)} required/>
          </div>
          <button type="submit" className="update__button btn btn-primary">Update</button>
          <Link className="update__button btn btn-secondary" to="/">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update