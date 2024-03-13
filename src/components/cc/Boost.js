import React, { useState } from "react";
import '../../styles/creators.css';
import { Title } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
export default function Boost() {


    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [keywords, setKeywords] = useState([]);

    const handleSubmitBoost = (e) => {
        e.preventDefault();

        console.log(title, link, keywords);

        const response = fetch(`${process.env.REACT_APP_API_URL}/creators/boost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": Cookies.get("email"), "title": title, "content_url": link, "keywords": keywords })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status == 200) {
                    // window.location.href = '/creators/success';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
           
    }


    return (
        <>
            <div className='cc-dashboard-container'>
                <form onSubmit={handleSubmitBoost} style={{ margin: 50 }}>
                    <h1>Request a boost</h1>
                    <br />
                    <br />


                    <label>
                        Title
                    </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />

                    <label>
                        Link to your Content
                    </label>
                    <input type="url" value={link} onChange={e => setLink(e.target.value)} required />

                    <label>
                        tag your content with keywords
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
                        value={keywords} onChange={e => setKeywords(e.target.value.split(','))} required />

                    <input type="submit" value="Submit" onClick={handleSubmitBoost} />
                </form>
            </div>
        </>
    );
}