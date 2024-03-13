
import React, { useState } from "react";
import '../styles/user.css';
import Cookies from 'js-cookie';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "email": email, "password": password })
            });

            if (response.ok) {
                const data = await response.json();

                if (data["success"] !== false) {
                    Cookies.set("email", email)// Update cookie or perform any other successful login action
                    Cookies.set("user", JSON.stringify(data));
                    console.log(Cookies.get('user'));

                    if (data['premium'] == true) {
                        Cookies.set('premium', true);
                    }

                    /*
                    {
                        "agree": "",
                        "business_email": "indu@gmail.com",
                        "contact_number": "",
                        "country": "country",
                        "description": "i need to market my product",
                        "doc_id": "1EVscQ7CDHh4XttrkboK",
                        "email": "email@email.com",
                        "link": "facebook.com",
                        "name": "name",
                        "password": "$2b$12$.hZcB/tWkbrwr6Wlu8/wyOV307/i94f8.VLkZSIRcWE12xPIADX3a",
                        "premium": "",
                        "region": "region",
                        "request": "pending",
                        "role": "",
                        "type": "youtuber"
                    }
                     */

                    //redirect
                    setError("")
                    window.location.href = "/";
                } else {
                    setError("Invalid email or password. Please try again.");
                }
            } else {
                setError("Fetch failed");
            }
        } catch (error) {
            setError("An unknown error occurred. Please try again later.");
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
                    <br></br>
                    {error && <p className='error-message'>{error}</p>}
                    <a className="redirect" href="/register">New to the platform? create an account for free.</a>

                </form>

            </div>
        </>
    );
}

