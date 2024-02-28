import React, { useState } from "react";
import '../../styles/user.css';
export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Here you can handle the login logic (e.g., send the username and password to your server)

        console.log(`Logging in with username: ${username} and password: ${password}`);
    };

    return (
        <>
            <div className="registration-container">

                <div className="login-section">
                    <h2 className="registration-heading">Admin Login</h2>
                </div>
                <form className="registration-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='login-button' type="submit">Login</button>
                    <br></br>
                </form>

            </div>
        </>
    );
}