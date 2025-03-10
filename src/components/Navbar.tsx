import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Toolbar,
    Box
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Receipt as ReceiptIcon,
    Person as PersonIcon,
    Description as DescriptionIcon,
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/invoixlogo.png'; // ✅ Import the Invoix logo

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true); 
    const location = useLocation(); 

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <Drawer
            variant="permanent"
            open={isOpen}
            sx={{
                width: isOpen ? 240 : 70,
                transition: 'width 0.3s',
                '& .MuiDrawer-paper': {
                    width: isOpen ? 240 : 70,
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            {/* 🔹 Logo Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 0',
                    backgroundColor: '#002b4b', // ✅ White background
                    borderBottom: '2px solid #E5E7EB', // ✅ Subtle bottom border for separation
                }}
            >
                <img
                    src={logo}
                    alt="Invoix Logo"
                    style={{
                        width: isOpen ? '120px' : '40px', // ✅ Full size in expanded mode, smaller in collapsed mode
                        height: 'auto',
                        transition: 'width 0.3s ease-in-out'
                    }}
                />
            </Box>

            {/* ➡️ Toggle Button */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={toggleDrawer}>
                    {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            </Toolbar>

            {/* ➡️ Navigation Links */}
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/home"
                        selected={location.pathname === '/home'}
                    >
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        {isOpen && <ListItemText primary="Dashboard" />}
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/home/invoices"
                        selected={location.pathname === '/home/invoices'}
                    >
                        <ListItemIcon><ReceiptIcon /></ListItemIcon>
                        {isOpen && <ListItemText primary="Invoices" />}
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/home/profile"
                        selected={location.pathname === '/home/profile'}
                    >
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        {isOpen && <ListItemText primary="Profile" />}
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/home/document"
                        selected={location.pathname === '/home/document'}
                    >
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        {isOpen && <ListItemText primary="Documents" />}
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Navbar;
