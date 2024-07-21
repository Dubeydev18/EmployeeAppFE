import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Credmarg Admin Dashboard</h1>
      <ul>
        <li><Link href="/employees">Manage Employees</Link></li>
        <li><Link href="/vendors">Manage Vendors</Link></li>
        <li><Link href="/emails">View Sent Emails</Link></li>
      </ul>
    </div>
  );
}
