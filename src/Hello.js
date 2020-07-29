import React from 'react';
import { Button } from 'react-bootstrap';


function Hello(props) {
  return (
    <div>
     <h1>Hello {props.name}</h1>
     <Button variant="primary">Primary</Button>
    </div>
  );
}


export default Hello;
