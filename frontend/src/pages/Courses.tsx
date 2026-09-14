function Courses() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Courses</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>Drone Pilot Training</h4>
              <p>Industry-focused drone certification course.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>Full Stack Development</h4>
              <p>
                Learn React, Node.js, APIs and database development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>AI & Machine Learning</h4>
              <p>
                Build intelligent applications using modern AI tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;