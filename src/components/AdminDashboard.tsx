import { useEffect, useState } from 'react';
import axios from 'axios';

interface Exhibitor {
  id: number;
  name: string;
  company_name: string;
  gst_no: string;
  phone_no: string;
  email: string;
  city: string;
  pincode: string;
  stall_area: string;
  needs_accomodation: boolean;
  needs_transportation: boolean;
  needs_brochure: boolean;
  needs_display: boolean;
}

function ViewExhibitors() {
  const [exhibitors, setExhibitors] = useState<Exhibitor[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exhibitors')
      .then(res => setExhibitors(res.data.data))
      .catch(err => console.error('Failed to fetch exhibitors:', err));
  }, []);

  return (
    <div>
      <h1>Exhibitor Details</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company Name</th>
            <th>GST No</th>
            <th>Zip code</th>

            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Stall Type</th>
            <th>Accomodation</th>
            <th>Transportation</th>
            <th>Display</th>
            <th>Brochure</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {exhibitors.map((ex, index) => (
            <tr key={index}>
              <td>{ex.name}</td>
              <td>{ex.company_name}</td>
              <td>{ex.gst_no}</td>
              <td>{ex.pincode}</td>
              <td>{ex.email}</td>
              <td>{ex.phone_no}</td>
              <td>{ex.city}</td>
              <td>{ex.stall_area}</td>
              <td>{ex.needs_accomodation ? 'Yes' : 'No'}</td>
              <td>{ex.needs_transportation ? 'Yes' : 'No'}</td>
              <td>{ex.needs_display ? 'Yes' : 'No'}</td>
              <td>{ex.needs_brochure ? 'Yes' : 'No'}</td>
              {/* Add more fields if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewExhibitors;
