import { useState, useEffect } from 'react';
import { sendEmail, getEmails } from '../services/api';

export default function Emails() {
  const [emails, setEmails] = useState([]);
  const [emailRequest, setEmailRequest] = useState({ vendorEmails: [], message: '' });

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await getEmails();
      setEmails(response.data);
    };
    fetchEmails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailRequest({ ...emailRequest, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(emailRequest);
    setEmailRequest({ vendorEmails: [], message: '' });
    const response = await getEmails();
    setEmails(response.data);
  };

  return (
    <div>
      <h1>View Sent Emails</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="vendorEmails" value={emailRequest.vendorEmails} onChange={handleChange} placeholder="Vendor Emails (comma separated)" />
        <input type="text" name="message" value={emailRequest.message} onChange={handleChange} placeholder="Message" />
        <button type="submit">Send Email</button>
      </form>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>{email.message} - {email.timestamp}</li>
        ))}
      </ul>
    </div>
  );
}
