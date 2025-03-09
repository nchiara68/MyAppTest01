import React from 'react';
import TableComponent from '../components/TableComponent';
import { TableRowData } from '../types/types';
import { Typography, Box, Paper } from '@mui/material';

const sampleData: TableRowData[] = [
    { id: 1, name: 'Alice Johnson', age: 29, role: 'Engineer' },
    { id: 2, name: 'Bob Smith', age: 34, role: 'Designer' },
    { id: 3, name: 'Charlie Brown', age: 41, role: 'Manager' }
];

const Invoices: React.FC = () => (
    <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
            📋 Invoices
        </Typography>

        <Paper elevation={3} sx={{ padding: 2 }}>
            <TableComponent data={sampleData} />
        </Paper>
    </Box>
);

export default Invoices;

