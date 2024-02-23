import React, { useState } from "react";
import '../styles/user.css';

export default function Register() {

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        // Validate the form fields

        // Send a request to the server to register the user

        // Handle the server's response
    };


    return (
        <div className="registration-container">
            <div className='login-section'>
                <h2 className='registration-heading' style={{marginLeft: 10}}>Register</h2>
            </div>
            <form className="registration-form" onSubmit={handleRegister}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="region">Region</label>
                    <input
                        type="text"
                        id="region"
                        name="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group inline">
                    <input
                        type="checkbox"
                        className="check"
                        id="agree"
                        name="agree"
                        required
                    />
                    <label htmlFor="agree" className="term">
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" className='login-button'>Register</button>
                <a className="redirect" href="login.html">
                    already have an account? click here to login
                </a>
            </form>
        </div>

    );
}