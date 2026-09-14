import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          AI Support Assistant
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/services">
            Services
          </Link>

          <Link className="nav-link" to="/courses">
            Courses
          </Link>

          <Link className="nav-link" to="/chatbot">
            Chatbot
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;