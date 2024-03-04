import React from "react";
import '../../styles/creators.css';
import Cookies from "js-cookie";

import CCSpotify from './CCSpotify';
import CCYoutube from './CCYoutube';
import CCVerify from "../elements/CCVerify";

import Task from "../elements/Task";
export default function CCDashboard() {

    //switch content render based on button click
    const [content, setContent] = React.useState('spotify');

    const checkIsCC = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/login`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "email": Cookies.get("email") })
            });

            if (response.ok) {
                Cookies.set('cc', true)
                //redirect
                window.location.href = "/admin/dashboard";
            } else {
            }
        } catch (error) {
        }

        console.log(`CC running with email: ${Cookies.get("email")}`);
    };

    function changeContent(content) {
        setContent(content);
    }



    //load previous boosts (history) here too. include views.
    return (
        <>
            <div className='cc-dashboard-container'>
                {/* {!Cookies.get('cc') && <CCVerify />} */}
                <div className='cc-header'>
                    <h1>Content Creator Dashboard</h1>
                    <br />
                    <span>
                        <button onClick={() => changeContent('spotify')} ><img src='spotify-icon.svg' /> Spotify</button>
                        <button onClick={() => changeContent('youtube')}><img src='youtube-icon.svg' /> Youtube</button>
                        <button className='stripe-button'><center><img src='stripe-icon.svg' /></center></button>
                    </span>
                </div>

                <br />
                <div className='cc-content'>
                    {content === 'spotify' ? <CCSpotify /> : <CCYoutube />}
                </div>

                <div className='boost-history'>
                    <div className='task-list'>
                        <Task title='Task 1' link='https://www.google.com' boost />
                        <Task title='Task 2' link='https://www.google.com' boost />
                        <Task title='Task 3' link='https://www.google.com' boost />
                        <Task title='Task 3' link='https://www.google.com' boost />
                        <Task title='Task 3' link='https://www.google.com' boost />
                        <Task title='Task 3' link='https://www.google.com' boost />
                    </div>

                </div>
            </div>


        </>
    );
}