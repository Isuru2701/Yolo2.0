import React, { useState } from 'react';
import '../../styles/header.css';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { AppRegistrationOutlined, DeveloperMode, ExitToApp, LoginOutlined, LogoDev, MenuOutlined, MovieCreationRounded, Person2Outlined, VerifiedUserOutlined, WorkspacePremiumOutlined } from '@mui/icons-material';
import Cookies from 'js-cookie';

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);


    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }

    const openSidebar = () => {
        setCollapsed(false);
    }

    const closeSidebar = () => {
        setCollapsed(true);
    }

    const handleLogout = async () => {
        Cookies.remove('email');
        window.location.href = '/login';
    }


    return (
        <div className='header-container'
            onMouseEnter={openSidebar}
            onMouseLeave={closeSidebar}
        >
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

                    <MenuItem icon={<HomeOutlinedIcon />} href='/'> Home</MenuItem>
                    {!Cookies.get('email') && <MenuItem icon={<LoginOutlined />} href='/login'>Login</MenuItem>}
                    {!Cookies.get('email') && <MenuItem icon={<Person2Outlined />} href='/register'>Register</MenuItem>}
                    {Cookies.get('email') && <MenuItem icon={<VerifiedUserOutlined />} href='/profile'>Profile</MenuItem>}
                    <MenuItem icon={<WorkspacePremiumOutlined />} href='/checkout?t=premium'>Premium</MenuItem>
                    <MenuItem icon={<MovieCreationRounded />} href='/creators'>Creators</MenuItem>
                    <MenuItem icon={<LogoDev />} href='/developers'>Developers</MenuItem>
                    {Cookies.get('email') && <MenuItem icon={<ExitToApp />} onClick={handleLogout}>Logout</MenuItem>}
                </Menu>
            </Sidebar>
        </div>
    );
}
