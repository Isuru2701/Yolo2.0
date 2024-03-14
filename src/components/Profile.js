import React from "react";
import '../styles/profile.css';
import { Grid } from "@mui/material";
import Cookies from "js-cookie";


export default function Profile() {


    const handlePortal = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/payment/create-portal-session`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data['success'] == true) {
                    //redirect to success page
                    window.location.href = '/success';
                }
            }
        }
        catch(error) {
            console.log(error);
        }
          
        }

    return (
        <>
            <div className="profile-container">
                <div className="profile-header">
                    <h1 style={{ color: 'white' }}>{Cookies.get('email')}</h1>
                    {Cookies.get('premium') == 'true' ? <h2 style={{ color: 'white' }}>Premium</h2> : <h2 style={{ color: 'white' }}>Free</h2>}
                    <br />
                    <span> {/*quick buttons */}
                        {/* <button className="quick-button" onClick={handlePortal}>Stripe portal</button> */}
                        <button className="quick-button coffee">Buy us a coffee</button>
                    </span>
                </div>


                <div className="collections-container" id="#collections">
                    <br />
                    <br />
                    <div className="profile-header">
                        <h2 style={{ color: 'white' }}>Collections you've subscribed to</h2>
                    </div>
                    <br />
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