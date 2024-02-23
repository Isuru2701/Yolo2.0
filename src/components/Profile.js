import React from "react";
import '../styles/profile.css';
import { Coffee } from "@mui/icons-material";
export default function Checkout() {
    return (
        <div className="profile-container">

            <div className="aside">
                <h1>Username</h1>
                <p>email</p>
                <hr />

                <button className='profile-menu-button'>Stripe Portal</button>
                <button className='kofi-button'><Coffee/> Buy us a coffee</button>
            </div>

            <div className='collections-container'>
                

            </div>
        </div>
    );
}