import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Bank Management System</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/loan" className="headerstyle">
            Loan
          </Link>
          <Link to="/profile" className="headerstyle">
            Profile
          </Link>
          <Link to="/list" className="headerstyle">
            LoanApplied
          </Link>
        </Nav>
        <Nav>
          <Link to="/login" style={{ color: "white" }}>
            LogOut
          </Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default header;
