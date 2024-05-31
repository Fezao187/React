import React from "react";
import { auth, provider } from "../firebase_config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/");
            })
    }
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="Enter email" />
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter password" />
                <button className="login-btn">Login</button>
                <hr />
                <div className="googLog">
                    <button className="login-with-google-btn" onClick={signInWithGoogle}>Login with Google</button>
                </div>
            </div>
        </div>
    )
}
export default Login;