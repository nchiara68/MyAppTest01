import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar'; // ✅ Import Navbar
import { Outlet } from 'react-router-dom'; // ✅ Outlet to render child pages

const Layout: React.FC = () => (
    <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                padding: 3,
                transition: 'margin-left 0.3s',
                marginLeft: { xs: '70px', sm: '240px' }
            }}
        >
            <Outlet /> {/* ✅ Renders child pages */}
        </Box>
    </Box>
);

export default Layout;

