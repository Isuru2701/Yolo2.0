import React from "react";
import '../styles/profile.css';
import { Grid } from "@mui/material";


export default function Profile() {


    return (
        <>
            <div className="profile-container">
                <div className="profile-header">
                    <h1 style={{color:'white'}}>Profile</h1>
                    <br></br>
                    <h2 style={{color:'white'}}>Hello username!</h2>
                    <span> {/*quick buttons */}
                        <button className="quick-button">Edit</button>
                        <button className="quick-button">Stripe portal</button>
                        <button className="quick-button coffee">Buy us a coffee</button>
                    </span>
                </div>

                <div className="collections-container">
                    <br/>
                    <br/>
                    <br/>
                    <h1 style={{color: "white"}}>Collections you've subscribed to</h1>

                    <div className="collection-grid">
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <div className="collection">
                                    <h2>Under The Moonlight</h2>
                                    <p>Collection description</p>
                                    <button>View</button>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="collection">
                                    <h2>Fight Back</h2>
                                    <p>Collection description</p>
                                    <button>View</button>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="collection">
                                    <h2>Home</h2>
                                    <p>Collection description</p>
                                    <button>View</button>
                                </div>
                            </Grid>

                        </Grid>
                    </div>
                </div>

            </div>
        </>
    )

}