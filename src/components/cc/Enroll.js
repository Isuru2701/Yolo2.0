import React from "react";
import '../../styles/creators.css'
export default function Enroll() {

    const [userType, setUserType] = React.useState("");
    const [link, setLink] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [goal, setGoal] = React.useState("");
    const [youtuberPressed, setYoutuberPressed] = React.useState(false);
    const [artistPressed, setArtistPressed] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(userType, link, email, goal);
    };

    const youtube = () => {
        setUserType('youtuber');
        setYoutuberPressed(true);
        setArtistPressed(false);
    }

    const artist = () => {
        setUserType('artist');
        setArtistPressed(true);
        setYoutuberPressed(false);
    }

    return (
        <>
            <div className='cc-dashboard-container'>
                <form onSubmit={handleSubmit} style={{margin: 50}}>
                    <label>What is your platform</label>
                    <button className={`choice-button${youtuberPressed? '-pressed': ''}`} value="youtuber" onClick={youtube}>
                        <img src='/youtube-icon.svg' style={{ width: '10%', height: 'auto', objectFit: 'cover' }} />   Youtube
                    </button>
                    <button className={`choice-button${artistPressed? '-pressed': ''}`} value="musician" onClick={artist}>
                        <img src='/spotify-icon.svg' style={{ width: '10%', height: 'auto', objectFit: 'cover' }} />   Spotify
                    </button>


                    <label>
                        Link to your page:
                    </label>
                    <input type="url" value={link} onChange={e => setLink(e.target.value)} required />

                    <label>
                        Business email:
                    </label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

                    <label>
                        What do you hope to achieve on the platform?
                    </label>
                    <textarea
                        style={{
                            width: '90%',
                            height: '150px',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxSizing: 'border-box',
                            resize: 'vertical',
                            marginTop: '10px',
                            marginBottom: '10px',
                            backgroundColor: 'var(--base-grey)',
                            color: 'var(--highlight-white)'
                        }}
                        value={goal} onChange={e => setGoal(e.target.value)} required />

                    <input type="submit" value="Submit" onClick={handleSubmit} />
                </form>
            </div>
        </>
    )
}