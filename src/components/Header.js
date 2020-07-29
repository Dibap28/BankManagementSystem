import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Bank Management System</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/loan" style={{ color: "white" }}>
              Loan
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile" style={{ color: "white" }}>
              Profile
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/list" style={{ color: "white" }}>
              LoanApplied
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to="/login" style={{ color: "white" }}>
              LogOut
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default header;
