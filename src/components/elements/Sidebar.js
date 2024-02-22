import React from "react";
import '../../styles/sidebar.css'

export default function Sidebar() {
    return (
        <>
            <div className="sidebar-container">
                <div className="button-container">
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

            </div>
        </>
    )
}