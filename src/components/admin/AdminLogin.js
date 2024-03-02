import React, { useState } from "react";
import '../../styles/user.css';
import Cookies from 'js-cookie';

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleAdminLogin = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/login`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "email": email, "password": password })
            });

            if (response.ok) {
                Cookies.set("email", email)// Update cookie or perform any other successful login action
                Cookies.set('admin', true)
                //redirect
                window.location.href = "/admin/dashboard";
            } else {
                setError("Invalid email or password. Please try again.");
            }
        } catch (error) {
            setError("An unknown error occurred. Please try again later.");
        }

        console.log(`Logging in with email: ${email} and password: ${password}`);
    };

    return (
        <>
            <div className="registration-container">

                <div className="login-section">
                    <h2 className="registration-heading">Admin</h2>
                </div>
                <form className="registration-form" onSubmit={handleAdminLogin}>
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
                </form>

            </div>
        </>
    );
}