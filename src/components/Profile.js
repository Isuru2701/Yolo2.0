import React from "react";
import '../styles/profile.css';
import { Coffee } from "@mui/icons-material";
import { Grid } from "@mui/material";
export default function Checkout() {
    const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];
    return (
        <div className="profile-container">

            <div className="aside">
                <h1>Username</h1>
                <p>email</p>
                <hr />

                <button className='profile-menu-button'>Stripe Portal</button>
                <button className='kofi-button'><Coffee /> Buy us a coffee</button>
            </div>

            <Grid container spacing={3} color={'white'} justifyContent={'flex-start'}>
                <Grid item xs={12} sm={6}>
                    <div className="collection-item">
                        <h1>Title</h1>
                        <p>Collection Description</p>
                        <button className='profile-menu-button'>Edit</button>
                        <button className='profile-menu-button'>Delete</button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    Collection 2
                </Grid>

                <Grid item xs={12} sm={6}>
                    Collection 3
                </Grid>

                <Grid item xs={12} sm={6}>
                    four
                </Grid>

                <Grid item xs={12} sm={6}>
                    five
                </Grid>
            </Grid>

        </div>
    );
}