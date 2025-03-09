import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const Document: React.FC = () => (
    <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
            📄 Documents
        </Typography>

        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography>
                Access and manage your important documents here.
            </Typography>
        </Paper>
    </Box>
);

export default Document;

