import React from 'react';
import '../../styles/task.css'
import { CheckCircle, HourglassEmpty } from '@mui/icons-material';

export default function Task({title, link, completed}){

    return (
        <>
        <div className='task-container'>
            <span> {/*render icon based on completion status */}
                {completed ? <CheckCircle fontSize='large'/>:<HourglassEmpty fontSize='large'/>}
            </span>
            <span>
                <h1>{title}</h1>
                <p>{link}</p>
            </span>

        </div>
        </>
    )

}