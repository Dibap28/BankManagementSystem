import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";

const Loan = (props) => {
  const [state, setState] = useState({
    loan_amount: props.loan_amount_state,
    loan_type: "Home Loan",
    date: "1/8/2020",
    rate_of_interest: "3.2",
    duration_of_loan: "",
  });
  // const [loan_amount, setLoanamount] = useState(props.loan_amount_state);
  // console.log("loan_amount", loan_amount);
  // const [loan_type, setLoantype] = useState("");
  // const [date, setDate] = useState("");
  // const [rate_of_interest, setRate] = useState("");
  // const [duration_of_loan, setDuration] = useState("");
  const handleChange = (event) => {
    //console.log(...state);
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const applyLoan = () => {
    console.log("Values applied for loan", state);
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
                  value={state.loan_type}
                  onChange={handleChange}
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
                  type="text"
                  className="col-md-6"
                  defaultValue="Choose..."
                  name="loan_amount"
                  value={props.loan_amount_state}
                  onChange={handleChange}
                ></Form.Control>
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
                  value={state.date}
                  onChange={handleChange}
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
                  value={state.rate_of_interest}
                  onChange={handleChange}
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
                  value={state.duration_of_loan}
                  onChange={handleChange}
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
                  onClick={props.saveValue}
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

const mapStateToProps = (state) => {
  return {
    loan_amount_state: state.loan_amount,
  };
};

const mapDispatchToProps = (dispatch, state) => {
  const data = state.loan_type;
  return {
    saveValue: (data) => dispatch({ type: "ADD_LOAN", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loan);
