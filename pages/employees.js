import { useState, useEffect } from 'react';
import { createEmployee, getEmployees } from '../services/api';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', designation: '', ctc: '', email: '' });

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await getEmployees();
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(newEmployee);
    setNewEmployee({ name: '', designation: '', ctc: '', email: '' });
    const response = await getEmployees();
    setEmployees(response.data);
  };

  return (
    <div>
      <h1>Manage Employees</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newEmployee.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="designation" value={newEmployee.designation} onChange={handleChange} placeholder="Designation" />
        <input type="number" name="ctc" value={newEmployee.ctc} onChange={handleChange} placeholder="CTC" />
        <input type="email" name="email" value={newEmployee.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">Save Employee</button>
      </form>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name} - {employee.designation}</li>
        ))}
      </ul>
    </div>
  );
}
