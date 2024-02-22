import React, { useState } from "react";
import '../../styles/header.css';
export default function Header() {
    
    const {isOpen, setOpen } = useState(false);
    
    function toggleState () {
        isOpen = setOpen(!isOpen);
    } 

    return (
        <>
        <header className="navbar">
            <button>

            </button>
            <button>
            </button>
            <button className="premium-button">
                Explore Premium
            </button>

        </header>

        </>
    );
}

