import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { ADD_LOAN, SAVE_LIST } from "../store/action";

const Loan = (props) => {
  console.log("PROPSSS-->", props.ln_array);

  const [state, setState] = useState({
    loan_amount: props.loan_amount_state,
    loan_type: "Home Loan",
    date: "1/8/2020",
    rate_of_interest: "3.2",
    duration_of_loan: props.duration_loan,
    loan_array: props.ln_array,
  });

  //useReducer
  console.log("MY SATET VALUE", state);

  const handleChange = (event) => {
    //console.log(...state);
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const dataSave = (e) => {
    const new_obj = { ...state };
    delete new_obj.loan_array;
    // console.log("Previous onj", state.loan_array);
    //  console.log("LOAN ARRY", state.loan_array);
    //console.log("STATE LOAN ARRAY-->", [...props.ln_array]);
    const new_obj_prev = [...state.loan_array];
    new_obj_prev.push(new_obj);

    setState({
      ...state,
      loan_array: [...state.loan_array, new_obj],
    });

    props.saveLoanArray(new_obj);
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
                  value={state.loan_amount}
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
                  onClick={dataSave}
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
    duration_loan: state.duration_of_loan,
    ln_array: state.loan_submitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveValue: (data) => dispatch({ type: ADD_LOAN, value: data }),
    saveLoanArray: (data) => {
      dispatch({ type: SAVE_LIST, value: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loan);
