import React, { useState, useEffect } from "react";
import '../../styles/creators.css';
import '../../styles/admin.css';
import Cookies from "js-cookie";

import CCSpotify from './CCSpotify';
import CCYoutube from './CCYoutube';
import CCVerify from "../elements/CCVerify";

import Task from "../elements/Task";
import { Cookie } from "@mui/icons-material";


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
export default function CCDashboard() {


    const [approvedBoosts, setApprovedBoosts] = useState([]);
    const checkForApprovedBoosts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/creators/approved?email=${Cookies.get('email')}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setApprovedBoosts(data);

            } else {
            }
        } catch (error) {
        }

    }

    const performPayment = async (docId) => {
        
    }

    useEffect(() => {
        checkForApprovedBoosts();
    }, []);


    console.log(Cookies.get('user'));

    //load previous boosts (history) here too. include views.
    return (
        <>
            <div className='cc-dashboard-container'>
                {!Cookies.get('user')['role'] == 'creator' && <CCVerify />}
                <div className='cc-header'>
                    <h1>Content Creator Dashboard</h1>
                    <br />
                    <span>
                        {/* <button onClick={() => changeContent('spotify')} ><img src='spotify-icon.svg' /> Spotify</button>
                        <button onClick={() => changeContent('youtube')}><img src='youtube-icon.svg' /> Youtube</button> */}
                        <button onClick={() => window.location.href = '/creators/boost'}><img src='boost-icon.svg' />Boost</button>
                        {/* <button className='stripe-button'><center><img src='stripe-icon.svg' /></center></button> */}
                    </span>
                </div>

                <br />
                <div className='cc-content'>
                    <h1>Approved requests payable</h1>
                    <Carousel>
                        {approvedBoosts.map((request, index) => (
                            <div key={index}>
                                <img src={request.image} alt={request.name} />
                                <h2 className="legend">{request.title}</h2>
                                <p className="legend"><a href={request.link}>Link</a></p>
                                <button onClick={() => performPayment(request.doc_id)}>Perform payment</button>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className='boost-history'>
                    <div className='task-list'>
                        <Task title='Boost 1' link='https://www.google.com' boost />
                        <Task title='Boost 2' link='https://www.google.com' boost />
                        <Task title='Boost 3' link='https://www.google.com' boost />
                        <Task title='Boost 3' link='https://www.google.com' boost />
                        <Task title='Boost 3' link='https://www.google.com' boost />
                        <Task title='Boost 3' link='https://www.google.com' boost />
                    </div>

                </div>
            </div>


        </>
    );
}