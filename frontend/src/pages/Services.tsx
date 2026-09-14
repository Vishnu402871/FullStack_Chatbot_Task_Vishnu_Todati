function Services() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Services</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Drone Training</h4>
              <p>
                Professional drone pilot training programs with
                certification support.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Technology Solutions</h4>
              <p>
                Software development, AI solutions and technical
                consulting services.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Business Consulting</h4>
              <p>
                Guidance for startups, digital transformation and
                operational improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;