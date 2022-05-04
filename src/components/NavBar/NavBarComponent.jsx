import "./navBarComponent.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const NavBarComponent = () => {
  const userBiz = useSelector((state) => state.auth.userData.biz);

  const LoggedInRedux = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authActions.logOut());
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top ">
      <NavLink className="navbar-brand text-dark" to="/">
        Calderon & co.
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink
              className="nav-link text-dark"
              aria-current="page"
              to="/home"
              activeClassName="activeLink"
            >
              Home <span className="sr-only" />
            </NavLink>
          </li>
          <li className="nav-item active ">
            <NavLink
              className="nav-link text-dark"
              aria-current="page"
              to="/about"
              activeClassName="activeLink"
            >
              About <span className="sr-only" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark"
              aria-current="page"
              to="/signUp"
              activeClassName="activeLink"
            >
              Sign Up
            </NavLink>
          </li>
          {!LoggedInRedux && (
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark"
                aria-current="page"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}

          <li className="nav-item">
            <NavLink
              className="nav-link text-dark "
              aria-current="page"
              to="/cardPanel"
              activeClassName="activeLink"
            >
              Cards
            </NavLink>
          </li>
          {userBiz && (
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark"
                aria-current="page"
                to="/createNewBizCard"
                activeClassName="activeLink"
              >
                Business Card
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {LoggedInRedux && (
        <button
          type="button"
          className="btn btn-warning btn-logout"
          onClick={logOut}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBarComponent;
