import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/enquiries",
        formData
      );

      alert("Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Error submitting enquiry");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            required
          />

          <textarea
            className="form-control mb-3"
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            required
          />

          <button
            className="btn btn-primary w-100"
            type="submit"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;