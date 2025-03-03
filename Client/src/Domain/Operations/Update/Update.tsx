import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './Update.scss'

export const Update = () => {
  const [ID, setID] = useState('')
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Age, setAge] = useState('')
  const [Department, setDepartment] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    // Fetch user data by ID and set the state
    axios.get(`/api/users/${id}`)
      .then(response => {
        const user = response.data
        setID(user.ID)
        setName(user.Name)
        setEmail(user.Email)
        setAge(user.Age)
        setDepartment(user.Department)
      })
      .catch(error => console.error('Error fetching user data:', error))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Update user data
    axios.put(`/api/users/${id}`, { ID, Name, Email, Age, Department })
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
            <input type="text" className="update__input form-control" id="id" value={ID} onChange={(e) => setID(e.target.value)} disabled />
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="name" className="update__label">Name</label>
            <input type="text" className="update__input form-control" id="name" value={Name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="email" className="update__label">Email address</label>
            <input type="email" className="update__input form-control" id="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="age" className="update__label">Age</label>
            <input type="number" className="update__input form-control" id="age" value={Age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="update__form-group form-group">
            <label htmlFor="department" className="update__label">Department</label>
            <input className="update__input form-control" id="department" value={Department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <button type="submit" className="update__button btn btn-primary">Update</button>
          <Link className="update__button btn btn-secondary" to="/">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update