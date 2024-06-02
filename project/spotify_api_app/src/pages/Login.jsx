import React from "react";
import { auth, provider } from "../firebase_config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";

function Login() {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/");
            })
    }
    return (
        <>
            <div className="container1">
                <div className="center">
                    <Form>
                        <h1>Login</h1>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <br />
                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button>
                        <hr />
                        <Button variant="outline-warning" onClick={signInWithGoogle}>
                            Sign In with Google
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Login;