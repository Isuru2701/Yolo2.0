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
import Boost from "./Boost";
export default function CCDashboard() {


    const [approvedBoosts, setApprovedBoosts] = useState([]);
    const [paidBoosts, setPaidBoosts] = useState([]);
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

    const checkForPaidBoosts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/creators/paid?email=${Cookies.get('email')}`, {
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
                setPaidBoosts(data);

            } else {
            }
        } catch (error) {
        }
    
    }

    useEffect(() => {
        checkForApprovedBoosts();
        checkForPaidBoosts();
    }, []);


    console.log(Cookies.get('user'));
    console.log("this thing " + JSON.parse(Cookies.get('user'))['role']+ "+"  +JSON.parse(Cookies.get('user'))['role'] == 'creator');

    //load previous boosts (history) here too. include views.
    return (
        <>
            <div className='cc-dashboard-container'>
                
                {JSON.parse(Cookies.get('user'))['role'] !== 'creator' && <CCVerify />}
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
                <div className='cc-content' style={{width:"70%"}}>
                    <h1>Approved requests payable</h1>
                    <Carousel
                        showArrows={true}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={false}
                        selectedItem={0}
                        emulateTouch={true}
                        dynamicHeight={false}
                        autoPlay={true}
                        interval={3000}
                        stopOnHover={true}
                        swipeable={true}
                        transitionTime={500}
                        centerMode={true}
                        centerSlidePercentage={50}
                        swipeScrollTolerance={5}
                        className="carousel"
                        style={{ width: '80%', margin: '0 auto' }}
                    >
                        {approvedBoosts.map((request, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'var(--base-grey)', borderRadius: 10, margin:10, padding:10}}>
                                <img src="boost-icon.svg" alt={request.name} style={{ maxWidth: '100%', maxHeight: '50px', marginBottom: '10px' }} />
                                <h2 style={{ marginBottom: '5px' }}>{request.title}</h2>
                                <a href={request.content_url}>Link</a>
                                <br/>
                                <button onClick={() => window.location.href=`/checkout?t=boosting&doc=${request.doc_id}`} style={{backgroundColor: "var(--tone)", border: "none", borderRadius: "10px", padding: "10px", color:"var(--highlight-white)"}}>Perform payment</button>
                            </div>
                        ))}
                    </Carousel>

                </div>

                <div className='boost-history'>
                    <h1>Paid boosts</h1>
                    <div className='task-list'>
                        {paidBoosts.map((boost) => 
                        (
                            <Task title={boost.title} link={boost.content_url} boost/>
                        
                        ))}
                    </div>

                </div>
            </div>


        </>
    );
}