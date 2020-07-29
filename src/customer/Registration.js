import React, { useState } from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Login from '../customer/Login';

const Registration = (props) => {
  let formname=props.formname;
  let IsDisabled=false;
  if(formname===undefined){
    formname='Registration';
  }else{
    IsDisabled=true;
  }
  const[fullname,setFullName]=useState("");
  const[email,setEmail]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[address1,setAddress1]=useState("");
  const[address2,setAddress2]=useState("");
  const[country,setCountry]=useState("");
  const[state,setState]=useState("");
  const[city,setCity]=useState("");
  const[zip,setZip]=useState("");
  const[pan,setPan]=useState("");
  const[contact_no,setContactNo]=useState("");
  const[dob,setDob]=useState("");
  const[account_type,setAccountType]=useState("");

  const setHandler=(event)=>{
    if(event.target.name ==="fullname"){
      setFullName(event.target.value);
    }
    if(event.target.name ==="email"){
      setEmail(event.target.value);
    }
    if(event.target.name ==="username"){
      setUsername(event.target.value);
    }
    if(event.target.name ==="password"){
      setPassword(event.target.value);
    }
    if(event.target.name ==="address1"){
      setAddress1(event.target.value);
    }
    if(event.target.name ==="address2"){
      setAddress2(event.target.value);
    }
    if(event.target.name ==="country"){
      setCountry(event.target.value);
    }
    if(event.target.name ==="state"){
      setState(event.target.value);
    }
    if(event.target.name ==="city"){
      setCity(event.target.value);
    }
    if(event.target.name ==="zip"){
      setZip(event.target.value);
    }
    if(event.target.name ==="pan"){
      setPan(event.target.value);
    }
    if(event.target.name ==="contct_no"){
      setContactNo(event.target.value);
    }
    if(event.target.name ==="dob"){
      setDob(event.target.value);
    }
    if(event.target.name ==="account_type"){
      setAccountType(event.target.value);
    }
    
  }
   const Register=()=>{

     console.log("Here",fullname,username,dob,account_type,country);
   }
    return ( <React.Fragment><div className="col-md-10 offset-1"><Card><Card.Header as="h2">{formname}</Card.Header>
    <Card.Body>
    <Form>
        <Form.Row>
        <Form.Group className="col-md-6 Registration-flex" controlId="formGridName">
            <Form.Label className="col-md-3">Full Name</Form.Label>
            <Form.Control className="col-md-9" name="fullname" type="text" placeholder="Enter name" onChange={setHandler} />
          </Form.Group>

          <Form.Group className="col-md-6 Registration-flex" controlId="formGridEmail">
            <Form.Label className="col-md-3">Email</Form.Label>
            <Form.Control className="col-md-9" name="email" type="email" placeholder="Enter email" onChange={setHandler} disabled={IsDisabled} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className="col-md-6 Registration-flex" controlId="formGridUsername">
            <Form.Label className="col-md-3">UserName</Form.Label>
            <Form.Control className="col-md-9" name="username" type="text" placeholder="Enter username" onChange={setHandler}/>
          </Form.Group>

          <Form.Group className="col-md-6 Registration-flex" controlId="formGridPassword">
            <Form.Label className="col-md-3">Password</Form.Label>
            <Form.Control className="col-md-9"name="password" type="password" placeholder="Password" onChange={setHandler}/>
          </Form.Group>
        </Form.Row>
      <Form.Row>
        <Form.Group className="col-md-6 Registration-flex" controlId="formGridAddress1">
          <Form.Label className="col-md-3">Address</Form.Label>
          <Form.Control className="col-md-9" name="address1" placeholder="House name" onChange={setHandler}/>
        </Form.Group>
      
        <Form.Group className="col-md-6 Registration-flex" controlId="formGridAddress2">
          <Form.Label className="col-md-3">Address 2</Form.Label>
          <Form.Control className="col-md-9" name="address2" placeholder="Apartment or floor" onChange={setHandler}/>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group className="col-md-3 Registration-flex" controlId="formGridCity">
            <Form.Label className="col-md-6">Country</Form.Label>
            <Form.Control className="col-md-6" as="select" name="country" defaultValue="Choose..." onChange={setHandler}>
              <option>Choose...</option>
              <option>India</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-md-3 Registration-flex" controlId="formGridCity" >
            <Form.Label className="col-md-6">State</Form.Label>
            <Form.Control className="col-md-6" as="select" name="state" defaultValue="Choose..." onChange={setHandler}>
              <option>Choose...</option>
              <option>Kerala</option>
            </Form.Control>
          </Form.Group>
      
          <Form.Group className="col-md-3 Registration-flex"  controlId="formGridState">
            <Form.Label className="col-md-6">City</Form.Label>
            <Form.Control className="col-md-6" as="select" name="city" defaultValue="Choose..." onChange={setHandler}>
              <option>Choose...</option>
              <option>Eranakulam</option>
            </Form.Control>
          </Form.Group>
      
          <Form.Group className="col-md-3 Registration-flex"  controlId="formGridZip">
            <Form.Label className="col-md-6">Zip</Form.Label>
            <Form.Control className="col-md-6" name="zip" type="text" placeholder="Enter zipcode" onChange={setHandler}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group className="col-md-6 Registration-flex" controlId="formGridPan">
            <Form.Label className="col-md-3">PAN</Form.Label>
            <Form.Control className="col-md-9" name="pan" type="text" placeholder="Enter pan no" onChange={setHandler} />
          </Form.Group>

          <Form.Group className="col-md-6 Registration-flex" controlId="formGridContactno">
            <Form.Label className="col-md-3">Contact No</Form.Label>
            <Form.Control className="col-md-9" name="contact_no" type="text" placeholder="Enter contact no" onChange={setHandler} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group className="col-md-6 Registration-flex" controlId="formGridDob">
            <Form.Label className="col-md-3">DOB</Form.Label>
            <Form.Control className="col-md-9" name="dob" type="text" placeholder="Enter mm/dd/yyyy" onChange={setHandler}/>
          </Form.Group>

          <Form.Group className="col-md-6 Registration-flex" controlId="formGridAccountType">
            <Form.Label className="col-md-3">Account Type</Form.Label>
            <Form.Control className="col-md-9" name="account_type"type="text" placeholder="Enter Account type" onChange={setHandler}/>
          </Form.Group>
        </Form.Row>
        <Link to="/login">
        <Button className="Button-left" variant="primary" type="submit" onClick={Register}>
          Register
        </Button>
        </Link>
      </Form>
      <br></br>
      <div><p>Already have an account? <Link to="/login"> SignIn </Link></p></div>
      </Card.Body>
      </Card></div></React.Fragment> );
}
 
export default Registration;