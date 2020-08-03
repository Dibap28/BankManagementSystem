import React, { useState } from "react";
import { Table, Card } from "react-bootstrap";
import { connect } from "react-redux";

const Loanlist = (props) => {
  const loanDetails = useState([...props.ln_array]);
  console.log("loanalist", loanDetails);
  return (
    <React.Fragment>
      <Card className="col-md-10 offset-1">
        <Card.Header as="h2">Loan Details</Card.Header>
        <Card-body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Loan Amount</th>
                <th>Loan Type</th>
                <th>Date</th>
                <th>Rate Of Interest</th>
                <th>Duration Of Loan</th>
              </tr>
            </thead>
            <tbody>
              {loanDetails[0].map((e, key) => (
                <tr>
                  <td>{++key}</td>
                  <td>{e.loan_amount}</td>
                  <td>{e.loan_type}</td>
                  <td>{e.date}</td>
                  <td>{e.rate_of_interest}</td>
                  <td>{e.duration_of_loan}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card-body>
      </Card>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ln_array: [...state.loan_submitted],
  };
};

export default connect(mapStateToProps, null)(Loanlist);
