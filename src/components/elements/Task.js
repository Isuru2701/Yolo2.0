import React from 'react';
import '../../styles/task.css'
import { CheckCircle, HourglassEmpty } from '@mui/icons-material';
import { Rocket } from '@mui/icons-material';
export default function Task({ title, link, completed, boost }) {

    return (
        <>
            <div className='task-container'>
                <span> {/*render icon based on completion status */}
                    {boost? <Rocket fontSize='large' /> : (completed ? <CheckCircle fontSize='large' /> : <HourglassEmpty fontSize='large' />)}
                </span>
                <span style={{ marginLeft: 30 }}>
                    <h1>{title}</h1>
                    <p>{link}</p>
                </span>

            </div>
        </>
    )

}