import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const createEmployee = (employee) => axios.post(`${API_URL}/employees`, employee);
export const createVendor = (vendor) => axios.post(`${API_URL}/vendors`, vendor);
export const sendEmail = (emailRequest) => axios.post(`${API_URL}/emails`, emailRequest);
export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const getVendors = () => axios.get(`${API_URL}/vendors`);
export const getEmails = () => axios.get(`${API_URL}/emails`);
