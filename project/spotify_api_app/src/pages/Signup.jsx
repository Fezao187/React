import React from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

function Signup(){
    return(
        <>
        <div className="container1">
            <div className="center">
            <Form>
            <h1>Sign Up</h1>
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <br/>
                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
                <hr/>
                <Button variant="outline-warning" >
                    Sign In with Google
                </Button>
            </Form>
            </div>
            </div>
        </>
    )
}

export default Signup;