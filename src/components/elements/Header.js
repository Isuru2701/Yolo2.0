import React, { useState } from 'react';
import '../../styles/header.css';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { AdminPanelSettings, AppRegistrationOutlined, DeveloperMode, ExitToApp, LoginOutlined, LogoDev, MenuOutlined, MovieCreationRounded, Person2Outlined, VerifiedUserOutlined, WorkspacePremiumOutlined } from '@mui/icons-material';
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

        if (Cookies.get('admin')) {
            Cookies.remove('admin');
        }

        if (Cookies.get('premium')) {
            Cookies.remove('premium');
        }
        if (Cookies.get('cc')) {
            Cookies.remove('cc');
        }
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
                    {Cookies.get('email') && !Cookies.get('admin') && <MenuItem icon={<VerifiedUserOutlined />} href='/profile'>Profile</MenuItem>}
                    {!Cookies.get('admin') && <MenuItem icon={<WorkspacePremiumOutlined />} href='/checkout?t=Premium'>Premium</MenuItem>}
                    {Cookies.get('admin') && <MenuItem icon={<AdminPanelSettings />} href='/admin/dashboard'>Admin</MenuItem>}
                    {!Cookies.get('admin') && <MenuItem icon={<MovieCreationRounded />} href='/creators'>Creators</MenuItem>}
                    {!Cookies.get('admin') && <MenuItem icon={<LogoDev />} href='/developers'>Developers</MenuItem>}
                    {Cookies.get('email') && <MenuItem icon={<ExitToApp />} onClick={handleLogout}>Logout</MenuItem>}
                    </Menu>
            </Sidebar>
        </div>
    );
}
