import React, { useState } from 'react';
import '../../styles/header.css';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { FiMenu, FiX } from 'react-icons/fi';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className={`header-container ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar">
                <Sidebar style={{ height: "100vh" }} collapsed={collapsed} rtl={true} backgroundColor='#2e2e2e'>
                    <Menu>
                        <MenuItem
                            icon={<MenuOutlinedIcon />}
                            onClick={() => {
                                toggleSidebar();
                            }}
                            style={{ textAlign: "center" }}
                        >
                            {" "}
                            <h2>Admin</h2>
                        </MenuItem>

                        <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                        <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
                        <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                        <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                        <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                        <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </div>
    );
}
