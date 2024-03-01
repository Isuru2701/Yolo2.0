import React, { useState } from "react";
import '../styles/user.css';
import Cookies from 'js-cookie';

export default function Register() {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        console.log(name, country, region, email, password, confirmPassword)
        // Validation checks
        if (!name.trim()) {
            setError('Please enter your name.');
            return;
        }

        if (!country.trim()) {
            setError('Please enter your country.');
            return;
        }

        if (!region.trim()) {
            setError('Please enter your region.');
            return;
        }

        if (!email.trim()) {
            setError('Please enter your email.');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email.');
            return;
        }

        if (!password.trim()) {
            setError('Please enter your password.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z]).{9,}$/;
        if(!passwordRegex.test(password)){
            setError('Password must contain at least 9 characters and one uppercase letter.');
            return;
        }

        if(!agree) {

        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ "name": name, "country": country, "region": region, "email": email, "password": password })
            });

            if (response['success'] == true) {
                Cookies.set("email", email);// Update cookie or perform any other successful login action
                //redirect
                window.location.href = "/";
                console.log('triggered')
            } else if (response['success'] == false) {
                setError("user already exists");
            }
        } catch (error) {
            setError(true);
        }
    };


    return (
        <div className="registration-container">
            <div className='login-section'>
                <h2 className='registration-heading' style={{ marginLeft: 10 }}>Register</h2>
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
                        onClick={(e) => setAgree(!agree)}
                        required

                    />
                    <label htmlFor="agree" className="term">
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" onClick={handleRegister} className='login-button'>Register</button>
                
                {error && <p className='error-message'>{error}</p>}
                <a className="redirect" href="/login">
                    <br />
                    <br />
                    already have an account? click here to login
                </a>
            </form>
        </div>

    );
}