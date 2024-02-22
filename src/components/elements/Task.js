import React from 'react';
import '../../styles/Task.css';

export default function Task({title, link, completed}){

    return (
        <>
        <div className='task-container'>
            <span> {/*render icon based on completion status */}
                {completed ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
            </span>
            <span>
                <h1>{title}</h1>
                <p>{link}</p>
            </span>

        </div>
        </>
    )

}