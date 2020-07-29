import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Loan = () => {
  const [loan_amount, setLoanamount] = useState("");
  const [loan_type, setLoantype] = useState("");
  const [date, setDate] = useState("");
  const [rate_of_interest, setRate] = useState("");
  const [duration_of_loan, setDuration] = useState("");

  const setLoantypeHandle = (event) => {
    setLoantype(event.target.value);
  };
  const setLoanamountHandle = (event) => {
    setLoanamount(event.target.value);
  };
  const setDateHandle = (event) => {
    setDate(event.target.value);
  };
  const setRateHandle = (event) => {
    setRate(event.target.value);
  };
  const setDurationHandle = (event) => {
    setDuration(event.target.value);
  };
  const applyLoan = () => {
    console.log(
      "Values applied for loan",
      loan_amount,
      loan_type,
      date,
      rate_of_interest,
      duration_of_loan
    );
  };
  return (
    <React.Fragment>
      <Card className="col-md-10 offset-1">
        <Card.Header as="h2">Apply Loan</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group
                className="col-md-6 Registration-flex"
                controlId="formGridLoantype"
              >
                <Form.Label className="col-md-6">Loan Type</Form.Label>
                <Form.Control
                  as="select"
                  className="col-md-6"
                  defaultValue="Choose..."
                  name="loan_type"
                  onChange={setLoantypeHandle}
                >
                  <option>Choose...</option>
                  <option>Home Loan</option>
                  <option>Car Loan</option>
                  <option>CreditCard Loan</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="col-md-6 Registration-flex"
                controlId="formGridLoanAmount"
              >
                <Form.Label className="col-md-6">Loan Amount</Form.Label>
                <Form.Control
                  as="select"
                  className="col-md-6"
                  defaultValue="Choose..."
                  name="loan_amount"
                  onChange={setLoanamountHandle}
                >
                  <option>Choose...</option>
                  <option>100000</option>
                  <option>200000</option>
                  <option>300000</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                className="col-md-6 Registration-flex"
                controlId="formGridDate"
              >
                <Form.Label className="col-md-6">Date</Form.Label>
                <Form.Control
                  className="col-md-6"
                  type="date"
                  placeholder="Enter date"
                  name="date"
                  onChange={setDateHandle}
                />
              </Form.Group>

              <Form.Group
                className="col-md-6 Registration-flex"
                controlId="formGridrateofInterest"
              >
                <Form.Label className="col-md-6">Rate Of Interest</Form.Label>
                <Form.Control
                  as="select"
                  className="col-md-6"
                  defaultValue="Choose..."
                  name="rate_of_interest"
                  onChange={setRateHandle}
                >
                  <option>Choose...</option>
                  <option>3.2</option>
                  <option>3.5</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                className="col-md-6 Registration-flex"
                controlId="formGriddurationofloan"
              >
                <Form.Label className="col-md-6">Duration Of Loan</Form.Label>
                <Form.Control
                  as="select"
                  className="col-md-6"
                  defaultValue="Choose..."
                  name="duration_of_loan"
                  onChange={setDurationHandle}
                >
                  <option>Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Form.Group>
              <div className="col-md-6">
                <Button
                  style={{ marginLeft: "10px", float: "left" }}
                  variant="primary"
                  onClick={applyLoan}
                >
                  Apply Loan
                </Button>
              </div>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Loan;
