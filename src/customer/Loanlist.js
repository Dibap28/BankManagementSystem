import React from 'react';
import {Table,Card} from 'react-bootstrap';

const Loanlist = () => {
    return ( <React.Fragment>
  <Card>
        <Card.Header as="h2">Loan Details</Card.Header>
      <Card-body>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>

</Table>
    </Card-body>
      </Card>
    </React.Fragment> );
}
 
export default Loanlist;