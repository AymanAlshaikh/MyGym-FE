import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        {/* <a class="navbar-brand">Navbar</a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <Link to="/" class="nav-link active" aria-current="page">
              <li class="nav-item">Home</li>
            </Link>
            <Link to="/gym" class="nav-link">
              <li class="nav-item">Gym</li>
            </Link>
            <Link to="/type" class="nav-link">
              <li class="nav-item">Type</li>
            </Link>
            <Link to="class" class="nav-link">
              <li class="nav-item">Class</li>
            </Link>
            <Link to="/signup" class="nav-link">
              <li class="nav-item">SignUp</li>
            </Link>
            <Link to="/signin" class="nav-link">
              <li class="nav-item">SignIn</li>
            </Link>{" "}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
