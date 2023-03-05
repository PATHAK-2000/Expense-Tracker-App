import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="nav__main">
      <div className="nav__links">
        <Link to="/" className="createLink">
          <h3 className="create">Create Expense</h3>
        </Link>
        <Link to="/view" className="viewLink">
          <h3 className="view">View Expenses</h3>
        </Link>
        <Link to="/total" className="totalLink">
          <h3 className="total">Total</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
