import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
    //const[email,setEmail]=useState("");
    let [email, password, error] = ["", "", false];
    const [emails, settingEmail] = useState("");
    const [pass, settingPassword] = useState("");
    const [errorMessage, setErrorMsg] = useState("");

    const setEmail = (event) => {
        email = event.target.value;
        settingEmail(email);
    };
    const setPassword = (event) => {
        password = event.target.value;
        settingPassword(password);
    };
    const submit = (event) => {
        if (emails === "test" && pass === "123") {
        } else {
            error = true;
            setErrorMsg("Invalid Username and Password");
            event.preventDefault();
        }
    };

    return (
        <React.Fragment>
            <div className="col-md-8 offset-2">
                <Card>
                    <Card.Header as="h2">SignIn</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row className="unset-margin">
                                <Form.Group className="Registration-flex fullwidth" controlId="formBasicEmail">
                                    <Form.Label className="halfwidth">Email address </Form.Label>
                                    <Form.Control className="halfwidth" type="email" placeholder="Enter email as test" onChange={setEmail} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="unset-margin">
                                <Form.Group className="Registration-flex fullwidth" controlId="formBasicPassword">
                                    <Form.Label className="halfwidth">Password</Form.Label>
                                    <Form.Control className="halfwidth" type="password" placeholder="Password as 123" onChange={setPassword} />
                                </Form.Group>
                            </Form.Row>
                            <span style={{ color: "red" }}>{errorMessage}</span>
                            <Link to="/dashboard">
                                <Button className="Button-left" variant="primary" type="submit" onClick={submit}>
                                    Submit
                                </Button>
                            </Link>
                        </Form>
                        <div>
                            <p>
                                For New User <Link to="/register"> Register Here </Link>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default Login;
