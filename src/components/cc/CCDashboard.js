import React from "react";
import '../../styles/creators.css';
import CCSpotify from './CCSpotify';
import CCYoutube from './CCYoutube';
export default function CCDashboard() {

    //switch content render based on button click
    const [content, setContent] = React.useState('spotify');


    function changeContent(content) {
        setContent(content);
    }

    //load previous boosts (history) here too. include views.
    return (
        <>
            <div className='cc-dashboard-container'>
                <div className='cc-header'>
                    <h1>Content Creator Dashboard</h1>
                    <br />
                    <button onClick={() => changeContent('spotify')} ><img src='spotify-icon.svg' /> Spotify</button>
                    <button onClick={() => changeContent('youtube')}><img src='youtube-icon.svg' /> Youtube</button>
                </div>
                
                <br/>
                <div className='cc-content'>
                    {content === 'spotify' ? <CCSpotify /> : <CCYoutube />}
                </div>
            </div>


        </>
    );
}