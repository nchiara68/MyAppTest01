import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000435',   // 🔵 Dark Blue Header
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    '&:first-of-type': {
                        borderTopLeftRadius: '12px',     // Rounded top-left corner
                        borderBottomLeftRadius: '12px'   // Rounded bottom-left corner (rows)
                    },
                    '&:last-of-type': {
                        borderTopRightRadius: '12px',    // Rounded top-right corner
                        borderBottomRightRadius: '12px'  // Rounded bottom-right corner (rows)
                    }
                },
                head: {
                    backgroundColor: '#FF5B00',  // Dark blue header background
                    color: 'white',              // ⚪ White text
                    fontWeight: 'bold',          // Bold for emphasis
                    textAlign: 'center'          // Center-align text in header
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: 'lightblue',  // 🔷 Light Blue for Odd Rows
                    },
                    '&:nth-of-type(even)': {
                        backgroundColor: 'lightgrey'   // ⚪ Light Grey for Even Rows
                    },
                    '&:hover': {
                        backgroundColor: '#e3f2fd'     // Subtle hover effect for better UX
                    }
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',     // Full rounded corners for the table itself
                    overflow: 'hidden',       // Ensures rounded corners clip content properly
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' // Soft shadow for a modern look
                }
            }
        }
    }
});

export default theme;
