import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)" }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                Netflix Home 
              </Link>
      </li>
      <li class="nav-item">
              <Link class="nav-link" to="/netflixshow">
                Netflix Shows
              </Link>
      </li>
      <li class="nav-item">
              <Link class="nav-link" to="/netflixmovies">
                Netflix Movies
              </Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
};