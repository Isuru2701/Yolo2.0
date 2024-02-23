import React from 'react';
import Box from '@mui/material/Box';
import { Cancel } from '@mui/icons-material';
import { Typography } from '@mui/material';
function SuccessMessage() {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: "100%",
            backgroundColor: 'var(--base-grey)',
            color: 'white'
            
        }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                height="100vh"
            >
                <Cancel style={{ fontSize: 60, color: 'red' }} />
                <Typography variant="h4" component="h1" gutterBottom>
                    Canceled!
                </Typography>
                <Typography variant="subtitle1" component="p">
                    The operation was canceled. You were not charged.
                </Typography>
            </Box>
        </div>
    );
}

export default SuccessMessage;