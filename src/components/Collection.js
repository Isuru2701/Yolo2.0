import React from "react";
import Task from "./elements/Task";
import '../styles/collection.css';
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";
export default function Collection() {

    return (
        <div className='collection-container'>
            <div className='content-main'>
                <div className='collection-image'>
                    <img src='https://www.svgrepo.com/show/508699/landscape-placeholder.svg' />
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