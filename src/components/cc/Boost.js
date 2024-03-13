import React, { useState, useEffect } from "react";
import '../../styles/creators.css';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Boost() {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [titleError, setTitleError] = useState("");
    const [linkError, setLinkError] = useState("");

    const handleSubmitBoost = async (e) => {
        e.preventDefault();

        if (validateInputs()) {
            console.log(title, link, keywords);

            const response = await fetch(`${process.env.REACT_APP_API_URL}/creators/boost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "email": Cookies.get("email"), "title": title, "content_url": link, "keywords": keywords })
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                window.location.href = "/creators/success";
            }
        }
        else {
            alert("Please fill in all the fields properly")
        }
    }

    const getkeywords = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/keywords`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                const data = await response.json();
                setSuggestions(data);
            } else {
                console.error('Error fetching keywords:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching keywords:', error);
        }
    }

    useEffect(() => {
        // Fetch keywords when component mounts
        getkeywords();
    }, []);

    const validateInputs = () => {
        let isValid = true;

        if (!title.trim()) {
            setTitleError("Title is required");
            isValid = false;
        } else {
            setTitleError("");
        }

        if (!link.trim()) {
            setLinkError("Link is required");
            isValid = false;
        } else {
            setLinkError("");
        }

        return isValid;
    }

    return (
        <div className='cc-dashboard-container'>
            <form onSubmit={handleSubmitBoost} style={{ margin: 50 }}>
                <h1>Request a boost</h1>
                <br />
                <br />

                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                {titleError && <span className="error">{titleError}</span>}

                <label>Link to your Content</label>
                <input type="url" value={link} onChange={e => setLink(e.target.value)} required />
                {linkError && <span className="error">{linkError}</span>}

                <label>Tag your content with keywords</label>
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
                    placeHolder="comma,seperated,like,this"
                    value={keywords.join(',')}
                    onChange={e => setKeywords(e.target.value.split(','))}
                    required
                >
                    {/* Render auto-suggestions */}
                    <datalist id="suggestions">
                        {suggestions.map((keyword, index) => (
                            <option key={index} value={keyword} />
                        ))}
                    </datalist>
                </textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
