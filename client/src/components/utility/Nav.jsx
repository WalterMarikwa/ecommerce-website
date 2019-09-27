import React from "react";

function Nav() {
  return (
    <div className="test">
      <header>
        <nav className="navbar navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="/home">
            <img
              src="https://cdn.pixabay.com/photo/2018/09/07/11/25/graphic-3660457__480.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Instrument<span style={{ color: "gold" }}>2.0</span>
          </a>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    HOME <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    PRODUCTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    CONTACT US
                  </a>
                </li>
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
                  <input id="MyInput" type="search" placeholder="Search" aria-label="Search" onkeyup="searchFunction()"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
          </nav>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
