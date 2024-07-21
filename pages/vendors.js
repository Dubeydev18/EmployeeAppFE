import { useState, useEffect } from 'react';
import { createVendor, getVendors } from '../services/api';

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState({ name: '', email: '', upi: '' });

  useEffect(() => {
    const fetchVendors = async () => {
      const response = await getVendors();
      setVendors(response.data);
    };
    fetchVendors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({ ...newVendor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createVendor(newVendor);
    setNewVendor({ name: '', email: '', upi: '' });
    const response = await getVendors();
    setVendors(response.data);
  };

  return (
    <div>
      <h1>Manage Vendors</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newVendor.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={newVendor.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="upi" value={newVendor.upi} onChange={handleChange} placeholder="UPI" />
        <button type="submit">Save Vendor</button>
      </form>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.id}>{vendor.name} - {vendor.upi}</li>
        ))}
      </ul>
    </div>
  );
}
