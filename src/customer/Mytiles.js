import React from "react";
import { Card } from "react-bootstrap";
const Mytiles = () => {
  return (
    <React.Fragment>
      <div
        className="col-md-12 form-inline"
        style={{ marginTop: "20px", marginRight: "10px" }}
      >
        <Card className="col-md-3 offset-1">
          <Card.Body>
            <Card.Title>Last Action</Card.Title>
            <Card.Text>Last Transaction held on 28/7/2020</Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-md-3 offset-1">
          <Card.Body>
            <Card.Title>User Transaction</Card.Title>
            <Card.Text>user suucessfully registered on 28/7/2020</Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-md-3 offset-1">
          <Card.Body>
            <Card.Title>User Profile Update</Card.Title>
            <Card.Text>User profile recently updated on 20/7/2020</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Mytiles;
