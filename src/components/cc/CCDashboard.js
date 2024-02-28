import React from "react";
import '../../styles/creators.css';

export default function CCDashboard() {
    //load previous boosts (history) here too. include views.
    return (
        <>
        <div className='cc-dashboard-container'>
        <div className='cc-header'>
                    <h1>Content Creator Dashboard</h1>
                    <br/>
                    <button> Spotify</button>
                    <button> Youtube</button>
                </div>
        </div>
        </>
    );
}