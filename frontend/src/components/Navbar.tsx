import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#1f2937",
      }}
    >
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/services" style={{ color: "white" }}>Services</Link>
      <Link to="/courses" style={{ color: "white" }}>Courses</Link>
      <Link to="/chatbot" style={{ color: "white" }}>Chatbot</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
      <Link to="/admin" style={{ color: "white" }}>Admin</Link>
    </nav>
  );
}

export default Navbar;