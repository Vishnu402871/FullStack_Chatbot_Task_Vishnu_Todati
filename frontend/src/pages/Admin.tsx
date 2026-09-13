import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEnquiries();
  }, []);

  const loadEnquiries = async (value = "") => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/enquiries?search=${value}`
      );
      setEnquiries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    await axios.put(
      `http://localhost:5000/api/enquiries/${id}`,
      { status }
    );

    loadEnquiries(search);
  };

  const deleteEnquiry = async (id: number) => {
    if (!window.confirm("Delete this enquiry?")) return;

    await axios.delete(
      `http://localhost:5000/api/enquiries/${id}`
    );

    loadEnquiries(search);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name, email or phone"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          loadEnquiries(e.target.value);
        }}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>

              <td>
                <select
                  value={item.status}
                  onChange={(e) =>
                    updateStatus(item.id, e.target.value)
                  }
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Closed</option>
                </select>
              </td>

              <td>
                <button
                  onClick={() => deleteEnquiry(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;