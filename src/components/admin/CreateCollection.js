import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material';
import React, { useState } from "react";
import { Remove } from '@mui/icons-material';

export default function CreateCollection() {
    const [contents, setContents] = useState([{ title: "", link: "" }]);
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [keywordsList, setKeywords] = useState("");
    const [title, setTitle] = useState("");
    const [premium, setPremium] = useState(false);

    const handleCreate = async (event) => {
        event.preventDefault();

        const keywords = keywordsList.split(',');

       
        console.log({ contents, description, duration, keywords, title, premium });
        const formData = {
            contents,
            description,
            duration,
            keywords,
            title,
            premium
        };

        const response = await fetch(`${process.env.REACT_APP_API_URL}/collections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            
            console.log("Data stored successfully:", formData);
        } else {
            
            console.log("Error storing data");
        }
    }

    const handleAddContent = () => {
        setContents([...contents, { title: "", link: "" }]);
    }

    const handleContentChange = (index, field, value) => {
        const newContents = [...contents];
        newContents[index][field] = value;
        setContents(newContents);
    }

    const GoldCheckbox = styled(Checkbox)({
        color: 'gold', // replace 'gold' with your actual color value
        '&.Mui-checked': {
            color: 'gold', // replace 'gold' with your actual color value
        },
    });

    const fetchKeywords = async () => {
    }


    const handleRemoveContent = (index) => {
        setContents(contents.filter((content, i) => i !== index));
    }

    return (
        <div className='cc-dashboard-container'>

            <form onSubmit={handleCreate} style={{ margin: 50 }}>
                <h1>Create Collection</h1>
                {contents.map((content, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
                        <div>
                            <label>Title:</label>
                            <input type="text" value={content.title} onChange={e => handleContentChange(index, 'title', e.target.value)} />
                        </div>
                        <div>
                            <label>Link:</label>
                            <input type="text" value={content.link} onChange={e => handleContentChange(index, 'link', e.target.value)} />
                            <button type="button" onClick={() => handleRemoveContent(index)} disabled={contents.length === 1} style={{backgroundColor:'transparent', marginLeft: 10, border:'none'}}><Remove sx= {{color: 'var(--sharp-blue)'}}/></button>
                        </div>
                    </div>
                ))}
                <button type="button" onClick={handleAddContent} style={{backgroundColor: "var(--tone-highlight)"}}>Add Content</button>
                <label>
                    Description:
                </label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />

                <label>
                    Duration:
                </label>
                <input type="text" value={duration} onChange={e => setDuration(e.target.value)} />

                <label>
                    Keywords:
                </label>
                <input type="text" placeholder='comma-separated,like,this' value={keywordsList} onChange={e => setKeywords(e.target.value)} />

                <label>
                    Collection Title:
                </label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

                <label>
                    Premium: <GoldCheckbox checked={premium} sx={{ color: "var(--gold)" }} onChange={e => setPremium(e.target.checked)} />
                </label>
                <br />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}