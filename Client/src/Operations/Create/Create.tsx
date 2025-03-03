import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Create.scss'

export const Create = () => {
  const [ID, setID] = useState('')
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Age, setAge] = useState('')
  const [Department, setDepartment] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create new user
    axios.post('/api/users', { ID, Name, Email, Age, Department })
      .then(() => navigate('/'))
      .catch(error => console.error('Error creating user:', error))
  }

  return (
    <div className="create">
      <div className="create__container mt-5">
        <h2 className="create__title mb-4">User Information Form</h2>
        <form className="create__form" onSubmit={handleSubmit}>
          <div className="create__form-group form-group">
            <label htmlFor="id" className="create__label">Employee ID</label>
            <input type="text" className="create__input form-control" id="id" placeholder="Enter ID" onChange={(e) => setID(e.target.value)} />
          </div>
          <div className="create__form-group form-group">
            <label htmlFor="name" className="create__label">Name</label>
            <input type="text" className="create__input form-control" id="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="create__form-group form-group">
            <label htmlFor="email" className="create__label">Email address</label>
            <input type="email" className="create__input form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="create__form-group form-group">
            <label htmlFor="age" className="create__label">Age</label>
            <input type="number" className="create__input form-control" id="age" placeholder="Enter age" onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="create__form-group form-group">
            <label htmlFor="department" className="create__label">Department</label>
            <input className="create__input form-control" id="department" placeholder="Enter department" onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <button type="submit" className="create__button btn btn-primary">Submit</button>
          <Link className="create__button btn btn-secondary" to="/">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create