import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from './theme';      // ✅ Custom theme for styling
import Layout from './components/Layout';  // ✅ Layout with Navbar integration

// Pages
import Dashboard from './pages/Dashboard';  // ✅ Dashboard as the Home Page
import Invoices from './pages/Invoices';    // ✅ Table Component (Invoices)
import Profile from './pages/Profile';      // ✅ Profile Page
import Document from './pages/Document';    // ✅ Document Page

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* ✅ Router Setup for Navigation */}
            <Router>
                <Routes>
                    {/* Main layout with Navbar + Pages */}
                    <Route path="/home" element={<Layout />}>
                        <Route index element={<Dashboard />} />    {/* /home - Dashboard */}
                        <Route path="invoices" element={<Invoices />} />  {/* /home/invoices */}
                        <Route path="profile" element={<Profile />} />    {/* /home/profile */}
                        <Route path="document" element={<Document />} />  {/* /home/document */}
                    </Route>

                    {/* ✅ Redirect root ("/") to Dashboard at "/home" */}
                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
