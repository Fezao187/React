// import the Form and Button react-bootstrap components
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
function UserForm() {
    /**Declare the two state variables and initialise their values
     * to an empty string
     */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Create a handleSubmit event
    const handleSubmit = event => {
        event.preventDefault();

        // Email validation
        let emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError("")
            emailValid = true
        }


        // Password validation
        let passValid = false;
        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 8) {
            setPasswordError("Password should be at leat 8 charactors");
        }
        else if (password.indexOf(" ") >= 0) {
            setPasswordError("Password cannot contain spaces!");
        }
        else {
            setPasswordError("");
            passValid = true;
        }

        if (emailValid && passValid) {
            alert('Email: ' + email + '\nPassword: ' + password);
            setEmail("");
            setPassword("");
        }
    }
    return (
        <div>
            {/* Bind the function to onsubmit */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={event => setEmail(event.target.value)} 
                        value={email}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {/* Display the error */}
                {emailError.length > 0 &&
                    <Alert variant="danger">{emailError}</Alert>}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        onChange={event => setPassword(event.target.value)} 
                        value={password}/>
                </Form.Group>
                {/* Display the error */}
                {passwordError.length > 0 &&
                    <Alert variant="danger">{passwordError}</Alert>}
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
            Email entered: {email}
            <br />
            assword entered: {password}
        </div>
    );
}
export default UserForm;