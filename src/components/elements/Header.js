import React, { useState } from "react";
import '../../styles/header.css';

import {FiMenu, FiX} from 'react-icons/fi';
import Sidebar from './Sidebar'; // Update this import to match your file structure

export default function Header() {

    const [isOpen, setOpen] = useState(false);

    function toggleState() {
        setOpen(!isOpen);
    }

    return (
        <div className="header-container">
            <header className="navbar">
                <a href='/' style={{textDecoration: 0}}><h1>YOLO</h1></a>
                <div className="main-content">
                    <button className="normal-button">
                        About Us
                    </button>
                    <button className="normal-button">
                        For Creators
                    </button>
                    <button className="normal-button">
                        For Developers
                    </button>
                    <button className="premium-button">
                        Explore Premium
                    </button>
                </div>

                <button className="menu-button" onClick={toggleState}>
                    {isOpen ? <FiX size={30}/> : <FiMenu size={30}/>}
                </button>

            </header>

            {isOpen && <Sidebar />}
        </div>
    );
}