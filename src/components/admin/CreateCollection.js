import React, { useState } from "react";

export default function CreateCollection() {
    const [contents, setContents] = useState([{ title: "", link: "" }]);
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [keywords, setKeywords] = useState("");
    const [title, setTitle] = useState("");
    const [premium, setPremium] = useState(false);

    const handleCreate = async (event) => {
        event.preventDefault();

        const keywordsList = keywords.split(',');

        // Now you have the form data in the format you want. You can handle it as needed.
        console.log({ contents, description, duration, keywordsList, title, premium });
    }

    const handleAddContent = () => {
        setContents([...contents, { title: "", link: "" }]);
    }

    const handleContentChange = (index, field, value) => {
        const newContents = [...contents];
        newContents[index][field] = value;
        setContents(newContents);
    }

    return (
        <div className='cc-dashboard-container'>
            <form onSubmit={handleCreate} style={{ margin: 50 }}>
                {contents.map((content, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
                        <div>
                            <label>Title:</label>
                            <input type="text" value={content.title} onChange={e => handleContentChange(index, 'title', e.target.value)} />
                        </div>
                        <div>
                            <label>Content Link:</label>
                            <input type="text" value={content.link} onChange={e => handleContentChange(index, 'link', e.target.value)} />
                        </div>
                    </div>
                ))}
                <button type="button" onClick={handleAddContent}>Add Content</button>
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
                <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)} />

                <label>
                    Title:
                </label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

                <label>
                    Premium:
                </label>
                <input type="checkbox" checked={premium} onChange={e => setPremium(e.target.checked)} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}