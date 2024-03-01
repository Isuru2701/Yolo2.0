
import React, { useState } from "react";
import '../styles/user.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"email": email,"password": password })
            });

            if (response.ok) {
                // Update cookie or perform any other successful login action
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <div className="registration-container">
                <div className="login-section">
                    <h2 className="registration-heading">Login</h2>
                </div>
                <form className="registration-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='login-button' type="submit">Login</button>
                    <br></br>
                    <a className="redirect" href="/register">New to the platform? create an account for free.</a>
                </form>
                {error && <p>Error occurred during login.</p>}
            </div>
        </>
    );
}

