import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const Dashboard: React.FC = () => (
    <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
            🏠 Dashboard
        </Typography>

        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography>
                Welcome to your dashboard! Access your data, reports, and insights here.
            </Typography>
        </Paper>
    </Box>
);

export default Dashboard;
