import React from "react";
import '../../styles/creators.css'
export default function Enroll() {

    const [userType, setUserType] = React.useState("");
    const [link, setLink] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [goal, setGoal] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(userType, link, email, goal);
    };

    return (
        <>
            <div className='cc-dashboard-container'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <button value="youtuber" onClick={() => setUserType('youtuber')}>
                            <img src='youtube-icon.svg' />Youtuber
                        </button>
                        <button value="musician" onClick={() => setUserType('artist')}>
                            <img src='spotify-icon.svg' />Artist
                        </button>

                    </label>
                    <label>
                        Link to your page:
                        <input type="url" value={link} onChange={e => setLink(e.target.value)} required />
                    </label>
                    <label>
                        Business email:
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        What do you hope to achieve on the platform?
                        <textarea value={goal} onChange={e => setGoal(e.target.value)} required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}