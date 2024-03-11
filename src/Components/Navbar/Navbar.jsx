import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary-subtle mb-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2  mb-lg-0">
              <li className="nav-item  mx-4">
                <Link
                  className="nav-link fw-bold active"
                  aria-current="page"
                  to="/"
                >
                  Tasks
                </Link>
              </li>
              <li className="nav-item  mx-4">
                <Link
                  className="nav-link fw-bold"
                  aria-current="page"
                  to="addproduct"
                >
                  Add Product
                </Link>
              </li>
              <li className="nav-item  mx-4">
                <Link
                  className="nav-link fw-bold"
                  aria-current="page"
                  to="products"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
