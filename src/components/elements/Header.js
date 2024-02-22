import React, { useState } from 'react';
import '../../styles/header.css';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { AppRegistrationOutlined, DeveloperMode, LoginOutlined, MenuOutlined, MovieCreationRounded, VerifiedUserOutlined, WorkspacePremiumOutlined } from '@mui/icons-material';

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

                    <MenuItem icon={<HomeOutlinedIcon />} href='/'> Home</MenuItem>
                    <MenuItem icon={<LoginOutlined />} href='/login'>Login</MenuItem>
                    <MenuItem icon={<AppRegistrationOutlined />} href='/register'>Register</MenuItem>
                    <MenuItem icon={<VerifiedUserOutlined />} href='/profile'>Profile</MenuItem>
                    <MenuItem icon={<WorkspacePremiumOutlined />} href='/checkout?t=premium'>Premium</MenuItem>
                    <MenuItem icon={<MovieCreationRounded />} href='/creators'>Creators</MenuItem>
                    <MenuItem icon={<DeveloperMode />} href='/developers'>Developers</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}
