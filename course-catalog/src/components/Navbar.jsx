import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <NavLink to="/" className="logo">
          Course Catalog
        </NavLink>
      </h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/category/Beginner"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Beginner
        </NavLink>

        <NavLink
          to="/category/Intermediate"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Intermediate
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
