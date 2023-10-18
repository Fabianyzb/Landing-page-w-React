import React from "react";

function App() {
  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {" "}
        {/* NAVBAR */}
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link disabled" aria-disabled="true">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        {" "}
        {/* DIV CON EL JUMBOTRON Y LAS CARDS */}
        <div className="jumbotron p-5 mb-4 bg-light border rounded-3">
          {" "}
          {/* JUMBOTRON */}
          <h1 className="display-4">A Warm Welcome</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            fugiat quibusdam voluptatum ex incidunt amet cumque voluptates et
            error earum? Sint tenetur labore corrupti itaque nihil at suscipit
            dolore illo.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
          </a>
        </div>
        {/* CARDS */}
        <div className="row p-1 mb-4">
          {/* CARD 1 */}
          <div className="col card p-0 text-center mx-2">
            {""}
            <img
              src="https://picsum.photos/id/46/500/325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body p-0">
              <h5 className="card-title m-3">Card title</h5>
              <p className="card-text p-3 pt-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="col card p-0 text-center mx-2">
            {""}
            <img
              src="https://picsum.photos/id/46/500/325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body p-0">
              <h5 className="card-title m-3">Card title</h5>
              <p className="card-text p-3 pt-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="col card p-0 text-center mx-2">
            {""}
            <img
              src="https://picsum.photos/id/46/500/325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body p-0">
              <h5 className="card-title m-3">Card title</h5>
              <p className="card-text p-3 pt-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="col card p-0 text-center mx-2">
            {""}
            <img
              src="https://picsum.photos/id/46/500/325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body p-0">
              <h5 className="card-title m-3">Card title</h5>
              <p className="card-text p-3 pt-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark " id="footer">
        <div className="container text-center bottom-0 start-0">
          <footer className="py-3 my-4 text-white">Copyright Your Website 2023</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
