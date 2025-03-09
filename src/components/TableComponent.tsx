import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, TextField,
    TableSortLabel, TablePagination, Box, Button
} from '@mui/material';
import { TableRowData } from '../types/types';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface TableComponentProps {
    data: TableRowData[];
}

type Order = 'asc' | 'desc';

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof TableRowData>('name');
    const [filter, setFilter] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);

    // Sorting Logic
    const handleRequestSort = (property: keyof TableRowData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedData = [...data].sort((a, b) => {
        if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
        return 0;
    });

    // Filtering Logic
    const filteredData = sortedData.filter((row) =>
        row.name.toLowerCase().includes(filter.toLowerCase()) ||
        row.role.toLowerCase().includes(filter.toLowerCase())
    );

    // Pagination Logic
    const paginatedData = filteredData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    // ➡️ Export to Excel Logic
    const handleExportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });

        saveAs(dataBlob, 'TableData.xlsx');
    };

    return (
        <Paper
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '100%' }, // ✅ Full width on small screens, 2/3 on medium+
                margin: '0 auto',                      // ✅ Center the table
                padding: 3,
                overflow: 'hidden'                     // ✅ Prevent overflow issues
            }}
        >
            {/* Filter Input */}
            <TextField
                label="Filter by name or role"
                variant="outlined"
                fullWidth
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{ marginBottom: 2 }}
            />

            {/* Download Button */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleExportToExcel}
                sx={{ marginBottom: 2 }}
            >
                Download as Excel
            </Button>

            {/* Table with Scrollable Container for Small Screens */}
            <TableContainer sx={{ maxHeight: '400px', overflowX: 'auto' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ minWidth: 80 }}>ID</TableCell>
                            <TableCell sx={{ minWidth: 150 }}>Name</TableCell>
                            <TableCell sx={{ minWidth: 100 }}>Age</TableCell>
                            <TableCell sx={{ minWidth: 150 }}>Role</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination Controls */}
            <Box display="flex" justifyContent="center" mt={2}>
                <TablePagination
                    component="div"
                    count={filteredData.length}
                    page={page}
                    onPageChange={(_, newPage) => setPage(newPage)}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={(e) =>
                        setRowsPerPage(parseInt(e.target.value, 10))
                    }
                />
            </Box>
        </Paper>
    );
};

export default TableComponent;
