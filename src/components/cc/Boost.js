import React, { useState } from "react";
import '../../styles/creators.css';
export default function Boost() {


    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [goal, setGoal] = useState("");

    const handleSubmitBoost = () => {

    }



    return (
        <>
            <div className='cc-dashboard-container'>
                <form onSubmit={handleSubmitBoost} style={{ margin: 50 }}>
                    <h1>Request a boost</h1>
                    <br/>
                    <br/>
                    

                    <label>
                        Title
                    </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />

                    <label>
                        Link to your Content
                    </label>
                    <input type="url" value={link} onChange={e => setLink(e.target.value)} required />

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

                    <input type="submit" value="Submit" onClick={handleSubmitBoost} />
                </form>
            </div>
        </>
    );
}