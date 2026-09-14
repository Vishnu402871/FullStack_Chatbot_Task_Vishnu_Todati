function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold">
          Full Stack AI Support & Lead Assistant
        </h1>

        <p className="lead mt-3">
          Welcome to our AI-powered customer and student support platform.
        </p>

        <div className="mt-4">
          <a
            href="/contact"
            className="btn btn-primary btn-lg me-3"
          >
            Contact Us
          </a>

          <a
            href="/chatbot"
            className="btn btn-success btn-lg"
          >
            Try Chatbot
          </a>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>Training</h4>
              <p>
                Professional training programs for students and
                professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>Technology</h4>
              <p>
                Innovative technology solutions and consulting
                services.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>Support</h4>
              <p>
                Quick customer support through chatbot and enquiry
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;