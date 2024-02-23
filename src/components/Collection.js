import React from "react";
import Task from "./elements/Task";
import '../styles/collection.css';
export default function Collection() {
    return (
        <div className='collection-container'>
            <div className='content-main'>
                <div className='collection-image'>
                    <img src='https://media.discordapp.net/attachments/1019486048876777532/1195289869832949830/bocchi-the-rock-wallpapers-v0-3ftgkqnlr67a1.png?ex=65e197f0&is=65cf22f0&hm=11492131440cf05944a3024481adf3f165164fee9a05e5dcb2c6f6e9702bf38f&=&format=webp&quality=lossless&width=372&height=662' />
                </div>
                <span className='content-info'>
                    <h1>Title</h1>
                    <p>Lorem ipsum </p>
                </span>
                <span className='content-tags'>
                    <div className='tag'>Tag 1</div>
                    <div className='tag'>Tag 2</div>
                    <div className='tag'>Tag 3</div>
                    <div className='tag'>Tag 4</div>
                </span>
            </div>
            <div className='task-list'>
                <Task title='Task 1' link='https://www.google.com' completed={true} />
                <Task title='Task 2' link='https://www.google.com' completed={true} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
                <Task title='Task 3' link='https://www.google.com' completed={false} />
            </div>

        </div>
    )

}