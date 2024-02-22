import React, { useState } from 'react';
import '../../styles/header.css';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { MenuOutlined } from '@mui/icons-material';

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className='header-container'>
            <Sidebar style={{ height: "100vh" }} collapsed={collapsed} rtl={true} backgroundColor='#2e2e2e'>
                <Menu>
                    <MenuItem
                        icon={<MenuOutlined />}
                        
                        onClick={() => {
                            toggleSidebar();
                        }}
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        <h2>YOLO</h2>
                    </MenuItem>

                    <MenuItem icon={<HomeOutlinedIcon />}> Home</MenuItem>
                    <MenuItem icon={<HomeOutlinedIcon />}>Login</MenuItem>
                    <MenuItem icon={<HomeOutlinedIcon />}>Register</MenuItem>
                    <MenuItem icon={<HomeOutlinedIcon />}>Profile</MenuItem>
                    <MenuItem icon={<HomeOutlinedIcon />}>FAQ</MenuItem>
                    <MenuItem icon={<HomeOutlinedIcon />}>Calendar</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}
