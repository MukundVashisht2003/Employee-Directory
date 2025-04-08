import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Create.scss';

export const Create = () => {
  const [Name, setName] = useState('');
  const [Department, setDepartment] = useState('');
  const [Position, setPosition] = useState(''); 
  const [Salary, setSalary] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:5016/api/Employee', { 
      id : '',
      Name: Name, 
      Position: Position, 
      Salary: Salary, 
      Department: Department 
    })
      .then(() => navigate('/'))
      .catch((error) => console.error('Error creating user:', error));
  };

  return (
    <div className="create">
      <div className="create__container mt-5">
        <h2 className="create__title mb-4">User Information</h2>
        <form className="create__form" onSubmit={handleSubmit}>
          <div className="create__form-group form-group">
            <label htmlFor="name" className="create__label">Name</label>
            <input
              type="text"
              className="create__input form-control"
              id="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="create__form-group form-group">
            <label htmlFor="age" className="create__label">Position</label>
            <input
              type="text"
              className="create__input form-control"
              id="age"
              placeholder="Enter Position"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>

          <div className="create__form-group form-group">
            <label htmlFor="position" className="create__label">Salary</label>
            <input
              type="number"
              className="create__input form-control"
              id="position"
              placeholder="Enter Salary"
              onChange={(e) => setSalary(e.target.value)} 
            />
          </div>

          <div className="create__form-group form-group">
            <label htmlFor="department" className="create__label">Department</label>
            <input
              type='text'
              className="create__input form-control"
              id="department"
              placeholder="Enter department"
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          
          <button type="submit" className="create__button btn btn-primary">Submit</button>
          <Link className="create__button btn btn-secondary" to="/">Back</Link>
        </form>
      </div>
    </div>
  );
};

export default Create;