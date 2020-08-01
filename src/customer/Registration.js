import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registration = (props) => {
  let formname = props.formname;
  let IsDisabled = false;
  if (formname === undefined) {
    formname = "Registration";
  } else {
    IsDisabled = true;
  }
  const [state, setState] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    pan: "",
    contact_no: "",
    dob: "",
    account_type: "",
  });
  const setHandler = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const Register = () => {
    console.log("Here", state);
  };
  return (
    <React.Fragment>
      <div className="col-md-10 offset-1">
        <Card>
          <Card.Header as="h2">{formname}</Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridName"
                >
                  <Form.Label className="col-md-3">Full Name</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="fullname"
                    value={state.fullname}
                    type="text"
                    placeholder="Enter name"
                    onChange={setHandler}
                  />
                </Form.Group>

                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridEmail"
                >
                  <Form.Label className="col-md-3">Email</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="email"
                    type="email"
                    value={state.email}
                    placeholder="Enter email"
                    onChange={setHandler}
                    disabled={IsDisabled}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridUsername"
                >
                  <Form.Label className="col-md-3">UserName</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="username"
                    value={state.username}
                    type="text"
                    placeholder="Enter username"
                    onChange={setHandler}
                  />
                </Form.Group>

                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridPassword"
                >
                  <Form.Label className="col-md-3">Password</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="password"
                    value={state.password}
                    type="password"
                    placeholder="Password"
                    onChange={setHandler}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridAddress1"
                >
                  <Form.Label className="col-md-3">Address</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="address1"
                    value={state.address1}
                    placeholder="House name"
                    onChange={setHandler}
                  />
                </Form.Group>

                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridAddress2"
                >
                  <Form.Label className="col-md-3">Address 2</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="address2"
                    value={state.address2}
                    placeholder="Apartment or floor"
                    onChange={setHandler}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-3 Registration-flex"
                  controlId="formGridCity"
                >
                  <Form.Label className="col-md-6">Country</Form.Label>
                  <Form.Control
                    className="col-md-6"
                    as="select"
                    name="country"
                    value={state.country}
                    defaultValue="Choose..."
                    onChange={setHandler}
                  >
                    <option>Choose...</option>
                    <option>India</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  className="col-md-3 Registration-flex"
                  controlId="formGridCity"
                >
                  <Form.Label className="col-md-6">State</Form.Label>
                  <Form.Control
                    className="col-md-6"
                    as="select"
                    name="state"
                    value={state.state}
                    defaultValue="Choose..."
                    onChange={setHandler}
                  >
                    <option>Choose...</option>
                    <option>Kerala</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  className="col-md-3 Registration-flex"
                  controlId="formGridState"
                >
                  <Form.Label className="col-md-6">City</Form.Label>
                  <Form.Control
                    className="col-md-6"
                    as="select"
                    name="city"
                    value={state.city}
                    defaultValue="Choose..."
                    onChange={setHandler}
                  >
                    <option>Choose...</option>
                    <option>Eranakulam</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  className="col-md-3 Registration-flex"
                  controlId="formGridZip"
                >
                  <Form.Label className="col-md-6">Zip</Form.Label>
                  <Form.Control
                    className="col-md-6"
                    name="zip"
                    value={state.zip}
                    type="text"
                    placeholder="Enter zipcode"
                    onChange={setHandler}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridPan"
                >
                  <Form.Label className="col-md-3">PAN</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="pan"
                    value={state.pan}
                    type="text"
                    placeholder="Enter pan no"
                    onChange={setHandler}
                  />
                </Form.Group>

                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridContactno"
                >
                  <Form.Label className="col-md-3">Contact No</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="contact_no"
                    value={state.contact_no}
                    type="text"
                    placeholder="Enter contact no"
                    onChange={setHandler}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridDob"
                >
                  <Form.Label className="col-md-3">DOB</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="dob"
                    value={state.dob}
                    type="text"
                    placeholder="Enter mm/dd/yyyy"
                    onChange={setHandler}
                  />
                </Form.Group>

                <Form.Group
                  className="col-md-6 Registration-flex"
                  controlId="formGridAccountType"
                >
                  <Form.Label className="col-md-3">Account Type</Form.Label>
                  <Form.Control
                    className="col-md-9"
                    name="account_type"
                    value={state.account_type}
                    type="text"
                    placeholder="Enter Account type"
                    onChange={setHandler}
                  />
                </Form.Group>
              </Form.Row>
              <Link to="/login">
                <Button
                  className="Button-left"
                  variant="primary"
                  type="submit"
                  onClick={Register}
                >
                  Register
                </Button>
              </Link>
            </Form>
            <br></br>
            <div>
              <p>
                Already have an account? <Link to="/login"> SignIn </Link>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Registration;
