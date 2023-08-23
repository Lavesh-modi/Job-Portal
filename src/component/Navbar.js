import React from "react";

export default function navbar() {
  return (
    <div>
      <div className="bg-img">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              JOB
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                // style=  {{marginRight: spacing + 'em'}}"--bs-scroll-height: 100px;"
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Job
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Companies
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Resume writing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Find Jobs
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Get recruiter's attention
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Link</a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
             <button type="button" class="btn btn-info">Register</button>
            </form> */}
              <button type="button" class="btn btn-info">
                Logout
              </button>
              <button type="button" class="btn btn-warning">
                Account
              </button>
            </div>
          </div>
        </nav>

        {/* <img
        src="https://img.freepik.com/free-vector/business-people-teamwork-suit-clothes_40876-2435.jpg?w=996&t=st=1689764290~exp=1689764890~hmac=c24964dcd6801bcaa69793573651d0e4356cfeea1bad059ed5f0f5035e5540ad"
        class="img-fluid"
        alt="Responsive image"
      /> */}
        <button type="button" className="btn btn-primary">
          <input type="text" class="input" placeholder="Job title, skills" />
          Search
        </button>
      </div>
    </div>
  );
}
